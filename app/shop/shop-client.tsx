'use client';

import { useState } from 'react';
import ProductCard from '../components/product-card';
import CartWidget from '../components/cart-widget';
import { BoxIcon } from '../components/icons';
import type { StoreCategory, StoreProduct } from '../../lib/cafe24';

export default function ShopClient({
  categories,
  products,
}: {
  categories: StoreCategory[];
  products: StoreProduct[];
}) {
  const [activeRoot, setActiveRoot] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const activeRootCategory = categories.find((c) => c.name === activeRoot);

  const rootCounts = new Map<string, number>();
  const subCounts = new Map<string, number>();
  const rootImage = new Map<string, string>();
  const subImage = new Map<string, string>();
  for (const p of products) {
    rootCounts.set(p.rootCategory, (rootCounts.get(p.rootCategory) ?? 0) + 1);
    subCounts.set(p.subCategory, (subCounts.get(p.subCategory) ?? 0) + 1);
    if (!rootImage.has(p.rootCategory)) rootImage.set(p.rootCategory, p.image);
    if (!subImage.has(p.subCategory)) subImage.set(p.subCategory, p.image);
  }
  // 상품이 없어 대표 이미지가 없는 분류는 임의의 상품 사진으로 채워 빈 원이 없게 한다.
  const fallbackImage = products[Math.floor(products.length / 3)]?.image ?? products[0]?.image;

  const trimmedQuery = searchQuery.trim().toLowerCase();

  // 검색어가 있으면 카테고리 필터와 무관하게 전체 상품명에서 찾는다.
  const filteredProducts = trimmedQuery
    ? products.filter((product) => product.name.toLowerCase().includes(trimmedQuery))
    : products.filter((product) => {
        if (activeSub) return product.subCategory === activeSub;
        if (activeRoot) return product.rootCategory === activeRoot;
        return true;
      });

  return (
    <section className="mt-12">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="상품명으로 검색"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#C8075F]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="검색어 지우기"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        )}
      </div>

      {!trimmedQuery && (
        <div className="mt-4 flex overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* Root category sidebar */}
          <nav className="w-[26%] shrink-0 border-r border-slate-100 bg-slate-50 sm:w-[20%]">
            <button
              type="button"
              onClick={() => {
                setActiveRoot(null);
                setActiveSub(null);
              }}
              className={`block w-full border-l-2 px-3 py-3.5 text-left text-xs font-semibold transition sm:text-sm ${
                activeRoot === null
                  ? "border-[#C8075F] bg-white text-[#C8075F]"
                  : "border-transparent text-slate-600 hover:bg-slate-100"
              }`}
            >
              전체
            </button>
            {categories.map((cat) => (
              <button
                key={cat.categoryNo}
                type="button"
                onClick={() => {
                  setActiveRoot(cat.name);
                  setActiveSub(null);
                }}
                className={`block w-full border-l-2 px-3 py-3.5 text-left text-xs font-semibold leading-tight transition sm:text-sm ${
                  activeRoot === cat.name
                    ? "border-[#C8075F] bg-white text-[#C8075F]"
                    : "border-transparent text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {/* Tile grid: subcategories of the active root, or all root categories when "전체" */}
          <div className="grid flex-1 grid-cols-3 gap-x-2 gap-y-4 p-4 sm:gap-x-4">
            {(activeRootCategory && activeRootCategory.children.length > 0
              ? activeRootCategory.children.map((sub) => ({
                  key: sub.categoryNo,
                  name: sub.name,
                  count: subCounts.get(sub.name) ?? 0,
                  image: subImage.get(sub.name) ?? fallbackImage,
                  active: activeSub === sub.name,
                  onClick: () => setActiveSub(activeSub === sub.name ? null : sub.name),
                }))
              : categories.map((cat) => ({
                  key: cat.categoryNo,
                  name: cat.name,
                  count: rootCounts.get(cat.name) ?? 0,
                  image: rootImage.get(cat.name) ?? fallbackImage,
                  active: activeRoot === cat.name,
                  onClick: () => {
                    setActiveRoot(cat.name);
                    setActiveSub(null);
                  },
                }))
            ).map((tile) => (
              <button
                key={tile.key}
                type="button"
                onClick={tile.onClick}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <span
                  className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-slate-100 ring-2 transition sm:h-24 sm:w-24 ${
                    tile.active ? "ring-[#C8075F]" : "ring-transparent"
                  }`}
                >
                  {tile.image ? (
                    <img src={tile.image} alt={tile.name} className="h-full w-full object-cover" />
                  ) : (
                    <BoxIcon />
                  )}
                </span>
                <span className={`line-clamp-2 text-[11px] font-medium leading-tight sm:text-xs ${tile.active ? "font-bold text-[#C8075F]" : "text-slate-700"}`}>
                  {tile.name}
                </span>
                <span className="text-[10px] text-slate-400">{tile.count}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-10 text-center text-base text-slate-400">
          {trimmedQuery ? "검색 결과가 없습니다." : "해당 분류에 등록된 상품이 없습니다."}
        </p>
      )}

      <CartWidget />
    </section>
  );
}
