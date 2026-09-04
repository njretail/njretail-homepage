// 카페24 Front API 연동 — 매장에서 실제로 판매 중인 상품을 홈페이지 "쇼핑하기"에 보여주기 위한 용도.
// Front API는 공개 상품 정보 조회용이라 Client ID + Front API Key(고정 키)만으로 호출할 수 있다
// (OAuth access token 발급/갱신이 필요 없음).
const MALL_ID = process.env.CAFE24_MALL_ID!;
const CLIENT_ID = process.env.CAFE24_CLIENT_ID!;
const FRONT_API_KEY = process.env.CAFE24_FRONT_API_KEY!;

// 장바구니/결제는 카페24 자체 페이지에서 처리한다 — 도메인이 연결되면 이 한 곳만 바꾸면 된다.
export const STORE_URL = `https://${MALL_ID}.cafe24.com`;

export function getProductPageUrl(productNo: number): string {
  return `${STORE_URL}/product/detail.html?product_no=${productNo}`;
}

function authHeaders() {
  const basic = Buffer.from(`${CLIENT_ID}:${FRONT_API_KEY}`).toString("base64");
  return {
    Authorization: `Basic ${basic}`,
    "X-Cafe24-Client-Id": CLIENT_ID,
  };
}

async function cafe24Fetch(path: string) {
  const res = await fetch(`https://${MALL_ID}.cafe24api.com${path}`, {
    headers: authHeaders(),
    // 상품이 자주 바뀌는 편이 아니라 1시간 캐시로 API 호출을 아낀다.
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`카페24 API 오류 (${path}): ${res.status}`);
  }
  return res.json();
}

export type StoreSubCategory = { categoryNo: number; name: string };
export type StoreCategory = {
  categoryNo: number;
  name: string;
  children: StoreSubCategory[];
};

export type StoreProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: "매장상품";
  rootCategory: string;
  subCategory: string;
  detailUrl: string;
};

type Cafe24Category = {
  category_no: number;
  category_depth: number;
  parent_category_no: number;
  category_name: string;
};

type Cafe24Product = {
  product_no: number;
  product_name: string;
  price: string;
  selling: "T" | "F";
  display: "T" | "F";
  small_image: string;
  list_image: string;
};

export async function getStoreCategories(): Promise<StoreCategory[]> {
  const data = await cafe24Fetch("/api/v2/categories?limit=100");
  const categories = (data.categories ?? []) as Cafe24Category[];
  const roots = categories.filter((c) => c.category_depth === 1);
  return roots.map((root) => ({
    categoryNo: root.category_no,
    name: root.category_name,
    children: categories
      .filter((c) => c.parent_category_no === root.category_no && c.category_depth === 2)
      .map((c) => ({ categoryNo: c.category_no, name: c.category_name.trim() })),
  }));
}

async function getProductsInCategory(
  categoryNo: number,
  rootName: string,
  subName: string
): Promise<StoreProduct[]> {
  const results: StoreProduct[] = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const data = await cafe24Fetch(
      `/api/v2/products?category=${categoryNo}&limit=${limit}&offset=${offset}`
    );
    const products = (data.products ?? []) as Cafe24Product[];
    for (const p of products) {
      if (p.selling !== "T" || p.display !== "T") continue;
      results.push({
        id: p.product_no,
        name: p.product_name,
        price: `₩${Math.round(Number(p.price)).toLocaleString("ko-KR")}`,
        image: p.list_image || p.small_image,
        category: "매장상품",
        rootCategory: rootName,
        subCategory: subName,
        detailUrl: getProductPageUrl(p.product_no),
      });
    }
    if (products.length < limit) break;
    offset += limit;
  }

  return results;
}

export type ProductDetail = {
  id: number;
  name: string;
  price: string;
  images: string[];
  storeUrl: string;
};

export async function getProductDetail(productNo: number): Promise<ProductDetail> {
  const data = await cafe24Fetch(`/api/v2/products/${productNo}`);
  const product = data.product ?? {};
  const description: string = product.description ?? "";
  const urls = Array.from(description.matchAll(/<img[^>]+src="([^"]+)"/gi)).map((m) => m[1]);
  const images = urls.length > 0 ? urls : product.detail_image ? [product.detail_image] : [];

  return {
    id: productNo,
    name: product.product_name ?? "",
    price: `₩${Math.round(Number(product.price)).toLocaleString("ko-KR")}`,
    images,
    storeUrl: getProductPageUrl(productNo),
  };
}

export async function getStoreProducts(): Promise<{
  categories: StoreCategory[];
  products: StoreProduct[];
}> {
  if (!MALL_ID || !CLIENT_ID || !FRONT_API_KEY) {
    console.warn("카페24 연동 환경변수가 설정되지 않아 쇼핑하기 상품 목록을 건너뜁니다.");
    return { categories: [], products: [] };
  }

  try {
    return await fetchStoreProducts();
  } catch (err) {
    console.error("카페24 상품 조회 실패:", err);
    return { categories: [], products: [] };
  }
}

async function fetchStoreProducts(): Promise<{
  categories: StoreCategory[];
  products: StoreProduct[];
}> {
  const categories = await getStoreCategories();

  // 소분류가 있으면 소분류 기준으로, 없으면(예: 아이스크림/빙과, 기타) 대분류 자체를 기준으로 가져온다.
  // 카페24 상품-카테고리 조회는 지정한 분류 번호에 직접 연결된 상품만 반환하므로, 소분류가 있는데
  // 상품이 대분류에도 바로 연결돼 있을 수 있어 두 경우 모두 가져와서 합친다(중복은 상품번호로 제거).
  const fetches: Promise<StoreProduct[]>[] = [];
  for (const root of categories) {
    fetches.push(getProductsInCategory(root.categoryNo, root.name, root.name));
    for (const child of root.children) {
      fetches.push(getProductsInCategory(child.categoryNo, root.name, child.name));
    }
  }

  const productLists = await Promise.all(fetches);
  const seen = new Set<number>();
  const products: StoreProduct[] = [];
  for (const list of productLists) {
    for (const p of list) {
      if (seen.has(p.id)) continue;
      seen.add(p.id);
      products.push(p);
    }
  }

  return { categories, products };
}
