// 카페24 Front API 연동 — 매장에서 실제로 판매 중인 상품을 홈페이지 "쇼핑하기"에 보여주기 위한 용도.
// Front API는 공개 상품 정보 조회용이라 Client ID + Front API Key(고정 키)만으로 호출할 수 있다
// (OAuth access token 발급/갱신이 필요 없음).
const MALL_ID = process.env.CAFE24_MALL_ID!;
const CLIENT_ID = process.env.CAFE24_CLIENT_ID!;
const FRONT_API_KEY = process.env.CAFE24_FRONT_API_KEY!;

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

export type StoreCategory = { categoryNo: number; name: string };

export type StoreProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: "매장상품";
  subCategory: string;
  detailUrl: string;
};

type Cafe24Category = {
  category_no: number;
  category_depth: number;
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
  return categories
    .filter((c) => c.category_depth === 1)
    .map((c) => ({ categoryNo: c.category_no, name: c.category_name }));
}

async function getProductsInCategory(categoryNo: number, subCategoryName: string): Promise<StoreProduct[]> {
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
        subCategory: subCategoryName,
        detailUrl: `https://${MALL_ID}.cafe24.com/product/detail.html?product_no=${p.product_no}`,
      });
    }
    if (products.length < limit) break;
    offset += limit;
  }

  return results;
}

export async function getStoreProducts(): Promise<{
  categories: StoreCategory[];
  products: StoreProduct[];
}> {
  const categories = await getStoreCategories();
  const productLists = await Promise.all(
    categories.map((c) => getProductsInCategory(c.categoryNo, c.name))
  );
  return { categories, products: productLists.flat() };
}
