'use client';

import { useState } from 'react';
import ProductCard from '../components/product-card';
import CartWidget from '../components/cart-widget';

const filters = ["전체", "장비", "소모품", "패키지", "매장상품"];

const storeSubCategories = [
  { name: "아이스크림/빙과", count: 0 },
  { name: "스낵/디저트", count: 0 },
  { name: "음료/생수", count: 0 },
  { name: "간편식/식재료", count: 0 },
  { name: "완구/문구(팬시)", count: 0 },
  { name: "생활용품/반려동물용품", count: 3 },
  { name: "기타", count: 0 },
];

const products = [
  {
    name: "무인매장 기본 패키지",
    category: "패키지",
    price: "₩1,490,000",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "키오스크 설치 세트",
    category: "장비",
    price: "₩890,000",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "출입 인증 시스템",
    category: "장비",
    price: "₩650,000",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "관리용 소모품 보충팩",
    category: "소모품",
    price: "₩190,000",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "스낵 & 음료 패키지",
    category: "매장상품",
    subCategory: "스낵/디저트",
    price: "₩120,000",
    image: "https://images.unsplash.com/photo-1606851092850-7b2e7d6c5b6b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "간편식 코너 세트",
    category: "매장상품",
    subCategory: "간편식/식재료",
    price: "₩85,000",
    image: "https://images.unsplash.com/photo-1542444459-db8f5d6b22e6?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ShopClient() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setActiveSubCategory(null);
  };

  const filteredProducts = products.filter((product) => {
    if (activeFilter !== "전체" && product.category !== activeFilter) return false;
    if (activeFilter === "매장상품" && activeSubCategory && product.subCategory !== activeSubCategory) return false;
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
                ? "bg-[#3B82F6] text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {activeFilter === "매장상품" && (
        <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          {storeSubCategories.map((sub) => (
            <button
              key={sub.name}
              type="button"
              onClick={() => setActiveSubCategory(activeSubCategory === sub.name ? null : sub.name)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSubCategory === sub.name
                  ? "bg-[#3B82F6] text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {sub.name}
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  activeSubCategory === sub.name ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {sub.count}
              </span>
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          // @ts-ignore
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      <CartWidget />
    </section>
  );
}
