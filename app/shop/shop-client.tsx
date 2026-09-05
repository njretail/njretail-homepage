'use client';

import { useState } from 'react';
import ProductCard from '../components/product-card';
import CartWidget from '../components/cart-widget';
import { StoreIcon } from '../components/icons';
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

  // 대분류/소분류마다 그 분류에 실제로 속한 상품 사진을 대표 이미지로 고정해서 쓴다.
  const subCounts = new Map<string, number>();
  const rootImage = new Map<string, string>();
  const subImage = new Map<string, string>();
  for (const p of products) {
    subCounts.set(p.subCategory, (subCounts.get(p.subCategory) ?? 0) + 1);
    if (!rootImage.has(p.rootCategory)) rootImage.set(p.rootCategory, p.image);
    if (!subImage.has(p.subCategory)) subImage.set(p.subCategory, p.image);
  }
  // 상품이 없는 분류(대표 사진이 없는 경우)에 쓸 대체 사진.
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
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          {/* 대분류: 가로 스크롤 아이콘 행 */}
          <div className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => {
                setActiveRoot(null);
                setActiveSub(null);
              }}
              className="flex w-16 shrink-0 flex-col items-center gap-1.5 text-center sm:w-20"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full transition sm:h-16 sm:w-16 [&_svg]:h-7 [&_svg]:w-7 sm:[&_svg]:h-8 sm:[&_svg]:w-8"
                style={activeRoot === null ? { backgroundColor: "#C8075F", color: "white" } : { backgroundColor: "#FCE7F0", color: "#C8075F" }}
              >
                <StoreIcon />
              </span>
              <span className={`text-xs font-medium sm:text-sm ${activeRoot === null ? "font-bold text-[#C8075F]" : "text-slate-700"}`}>전체</span>
            </button>
            {categories.map((cat) => {
              const active = activeRoot === cat.name;
              const image = rootImage.get(cat.name) ?? fallbackImage;
              return (
                <button
                  key={cat.categoryNo}
                  type="button"
                  onClick={() => {
                    setActiveRoot(cat.name);
                    setActiveSub(null);
                  }}
                  className="flex w-16 shrink-0 flex-col items-center gap-1.5 text-center sm:w-20"
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-slate-100 ring-2 transition sm:h-16 sm:w-16 ${
                      active ? "ring-[#C8075F]" : "ring-transparent"
                    }`}
                  >
                    {image && <img src={image} alt={cat.name} className="h-full w-full object-cover" />}
                  </span>
                  <span className={`line-clamp-2 text-xs font-medium leading-tight sm:text-sm ${active ? "font-bold text-[#C8075F]" : "text-slate-700"}`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 소분류: 선택된 대분류가 있을 때만, 같은 대표 아이콘으로 통일해 표시 */}
          {activeRootCategory && activeRootCategory.children.length > 0 && (
            <div className="-mx-1 mt-4 flex gap-1 overflow-x-auto border-t border-slate-200 px-1 pb-1 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {activeRootCategory.children.map((sub) => {
                const active = activeSub === sub.name;
                const image = subImage.get(sub.name) ?? fallbackImage;
                return (
                  <button
                    key={sub.categoryNo}
                    type="button"
                    onClick={() => setActiveSub(active ? null : sub.name)}
                    className="flex w-16 shrink-0 flex-col items-center gap-1.5 text-center sm:w-20"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-slate-100 ring-2 transition sm:h-14 sm:w-14 ${
                        active ? "ring-[#C8075F]" : "ring-transparent"
                      }`}
                    >
                      {image && <img src={image} alt={sub.name} className="h-full w-full object-cover" />}
                    </span>
                    <span className={`line-clamp-2 text-[11px] font-medium leading-tight sm:text-xs ${active ? "font-bold text-[#C8075F]" : "text-slate-600"}`}>
                      {sub.name}
                    </span>
                    <span className="text-[10px] text-slate-400">{subCounts.get(sub.name) ?? 0}</span>
                  </button>
                );
              })}
            </div>
          )}
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
