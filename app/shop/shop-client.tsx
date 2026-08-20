'use client';

import ProductCard from '../components/product-card';
import CartWidget from '../components/cart-widget';

const filters = ["전체", "장비", "소모품", "패키지", "매장상품"];

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
    price: "₩120,000",
    image: "https://images.unsplash.com/photo-1606851092850-7b2e7d6c5b6b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "간편식 코너 세트",
    category: "매장상품",
    price: "₩85,000",
    image: "https://images.unsplash.com/photo-1542444459-db8f5d6b22e6?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ShopClient() {
  return (
    <section className="mt-12">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              index === 0
                ? "bg-[#3B82F6] text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          // @ts-ignore
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      <CartWidget />
    </section>
  );
}
