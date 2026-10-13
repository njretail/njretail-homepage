'use client';

import { useState } from 'react';
import ProductCard from '../components/product-card';
import CartWidget from '../components/cart-widget';
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

  const subCounts = new Map<string, number>();
  for (const p of products) {
    subCounts.set(p.subCategory, (subCounts.get(p.subCategory) ?? 0) + 1);
  }

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
      <div className="relative mx-auto max-w-xl">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.2-3.2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="취급 품목 검색"
          className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-11 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#C8075F]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="검색어 지우기"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        )}
      </div>

      {!trimmedQuery && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveRoot(null);
                setActiveSub(null);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeRoot === null ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              전체
            </button>
            {categories.map((cat) => {
              const active = activeRoot === cat.name;
              return (
                <button
                  key={cat.categoryNo}
                  type="button"
                  onClick={() => {
                    setActiveRoot(cat.name);
                    setActiveSub(null);
                  }}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {activeRootCategory && activeRootCategory.children.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 border-t border-slate-200 pt-3">
              {activeRootCategory.children.map((sub) => {
                const active = activeSub === sub.name;
                return (
                  <button
                    key={sub.categoryNo}
                    type="button"
                    onClick={() => setActiveSub(active ? null : sub.name)}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium transition ${
                      active
                        ? "bg-[#C8075F] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {sub.name}
                    <span className={active ? "text-white/70" : "text-slate-400"}>{subCounts.get(sub.name) ?? 0}</span>
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
