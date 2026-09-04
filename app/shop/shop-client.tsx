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

  const handleRootClick = (name: string) => {
    if (activeRoot === name) {
      setActiveRoot(null);
      setActiveSub(null);
    } else {
      setActiveRoot(name);
      setActiveSub(null);
    }
  };

  const activeRootCategory = categories.find((c) => c.name === activeRoot);

  const rootCounts = new Map<string, number>();
  const subCounts = new Map<string, number>();
  for (const p of products) {
    rootCounts.set(p.rootCategory, (rootCounts.get(p.rootCategory) ?? 0) + 1);
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
        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <button
              type="button"
              onClick={() => {
                setActiveRoot(null);
                setActiveSub(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeRoot === null
                  ? "bg-[#C8075F] text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              전체
            </button>
            {categories.map((cat) => (
              <button
                key={cat.categoryNo}
                type="button"
                onClick={() => handleRootClick(cat.name)}
                className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeRoot === cat.name
                    ? "bg-[#C8075F] text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat.name}
                <span className={activeRoot === cat.name ? "text-white/80" : "text-slate-400"}>
                  {rootCounts.get(cat.name) ?? 0}
                </span>
              </button>
            ))}
          </div>

          {activeRootCategory && activeRootCategory.children.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-3">
              {activeRootCategory.children.map((sub) => (
                <button
                  key={sub.categoryNo}
                  type="button"
                  onClick={() => setActiveSub(activeSub === sub.name ? null : sub.name)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    activeSub === sub.name
                      ? "bg-slate-800 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {sub.name}
                  <span className={activeSub === sub.name ? "text-white/70" : "text-slate-400"}>
                    {subCounts.get(sub.name) ?? 0}
                  </span>
                </button>
              ))}
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
