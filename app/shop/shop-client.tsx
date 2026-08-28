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
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setActiveSubCategory(null);
  };

  // 장비/소모품/패키지는 아직 실제 판매 데이터가 없어 "전체" 목록에는 포함하지 않는다.
  const filteredProducts =
    activeFilter === "장비" || activeFilter === "소모품" || activeFilter === "패키지"
      ? []
      : products.filter((product) => {
          if (activeSubCategory && product.subCategory !== activeSubCategory) return false;
          return true;
        });

  return (
    <section className="mt-12">
      <div className="flex flex-wrap gap-3">
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

      {(activeFilter === "전체" || activeFilter === "매장상품") && (
        <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          {categories.map((cat) => (
            <button
              key={cat.categoryNo}
              type="button"
              onClick={() =>
                setActiveSubCategory(activeSubCategory === cat.name ? null : cat.name)
              }
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSubCategory === cat.name
                  ? "bg-[#C8075F] text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {(activeFilter === "장비" || activeFilter === "소모품" || activeFilter === "패키지") && (
        <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-base text-slate-500">
          곧 준비할게요. 지금은 매장상품만 판매 중이에요.
        </p>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartWidget />
    </section>
  );
}
