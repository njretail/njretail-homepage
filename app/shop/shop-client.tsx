'use client';

import { useState } from 'react';
import ProductCard from '../components/product-card';
import CartWidget from '../components/cart-widget';
import type { StoreCategory, StoreProduct } from '../../lib/cafe24';

const filters = ["전체", "매장상품", "장비", "소모품", "패키지"];

export default function ShopClient({
  categories,
  products,
}: {
  categories: StoreCategory[];
  products: StoreProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [activeRoot, setActiveRoot] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setActiveRoot(null);
    setActiveSub(null);
  };

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
  // 장비/소모품/패키지는 아직 실제 판매 데이터가 없어 목록에는 포함하지 않는다.
  const filteredProducts = trimmedQuery
    ? products.filter((product) => product.name.toLowerCase().includes(trimmedQuery))
    : activeFilter === "장비" || activeFilter === "소모품" || activeFilter === "패키지"
      ? []
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

      <div className="mt-4 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleFilterClick(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "bg-[#C8075F] text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {!trimmedQuery && (activeFilter === "전체" || activeFilter === "매장상품") && (
        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.categoryNo}
                type="button"
                onClick={() => handleRootClick(cat.name)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
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

      {!trimmedQuery && (activeFilter === "장비" || activeFilter === "소모품" || activeFilter === "패키지") && (
        <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-base text-slate-500">
          곧 준비할게요. 지금은 매장상품만 판매 중이에요.
        </p>
      )}

      <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (trimmedQuery || activeFilter === "전체" || activeFilter === "매장상품") && (
        <p className="mt-10 text-center text-base text-slate-400">
          {trimmedQuery ? "검색 결과가 없습니다." : "해당 분류에 등록된 상품이 없습니다."}
        </p>
      )}

      <CartWidget />
    </section>
  );
}
