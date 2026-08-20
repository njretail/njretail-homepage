'use client';

import { useCallback } from 'react';

type Product = { name: string; category: string; price: string; image: string };

function parsePrice(price: string) {
  // convert strings like '₩1,490,000' to number 1490000
  const digits = price.replace(/[^0-9]/g, '');
  return digits ? parseInt(digits, 10) : 0;
}

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCallback(() => {
    try {
      const raw = localStorage.getItem('nj_cart');
      const arr = raw ? JSON.parse(raw) : [];
      const price = parsePrice(product.price);
      const existIdx = arr.findIndex((p: any) => p.name === product.name);
      if (existIdx >= 0) {
        arr[existIdx].qty += 1;
      } else {
        arr.push({ name: product.name, price, qty: 1 });
      }
      localStorage.setItem('nj_cart', JSON.stringify(arr));
      window.dispatchEvent(new CustomEvent('njcart:update'));
      alert('장바구니에 담겼습니다.');
    } catch (e) {
      console.error(e);
    }
  }, [product]);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
      <div className="p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">{product.category}</div>
        <h3 className="mt-3 text-xl font-bold text-slate-900">{product.name}</h3>
        <p className="mt-4 text-2xl font-bold text-slate-900">{product.price}</p>
        <div className="mt-5 flex items-center gap-3">
          <button onClick={addToCart} className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#3B82F6] px-4 py-3 text-sm font-semibold text-white hover:bg-[#2563eb]">
            장바구니 담기
          </button>
          <a href="/service" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            상세보기
          </a>
        </div>
      </div>
    </article>
  );
}
