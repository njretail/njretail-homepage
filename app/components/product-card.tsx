'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

type Product = { id: number; name: string; category: string; price: string; image: string };

function parsePrice(price: string) {
  // convert strings like '₩1,490,000' to number 1490000
  const digits = price.replace(/[^0-9]/g, '');
  return digits ? parseInt(digits, 10) : 0;
}

function addItemToCart(product: Product) {
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
}

export default function ProductCard({
  product,
  onShowDetail,
}: {
  product: Product;
  onShowDetail: (id: number) => void;
}) {
  const router = useRouter();

  const handleAddToCart = useCallback(() => {
    try {
      addItemToCart(product);
      alert('장바구니에 담겼습니다.');
    } catch (e) {
      console.error(e);
    }
  }, [product]);

  const handleBuyNow = useCallback(() => {
    try {
      addItemToCart(product);
      router.push('/shop/checkout');
    } catch (e) {
      console.error(e);
    }
  }, [product, router]);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
      <div className="p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8075F]">{product.category}</div>
        <h3 className="mt-3 text-xl font-bold text-slate-900">{product.name}</h3>
        <p className="mt-4 text-2xl font-bold text-slate-900">{product.price}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center rounded-xl border border-[#C8075F] bg-white px-4 py-3 text-sm font-semibold text-[#C8075F] hover:bg-[#FDEEF4]"
          >
            장바구니 담기
          </button>
          <button
            onClick={handleBuyNow}
            className="inline-flex items-center justify-center rounded-xl bg-[#C8075F] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a8054e]"
          >
            주문하기
          </button>
        </div>
        <button
          onClick={() => onShowDetail(product.id)}
          className="mt-3 block w-full text-center text-sm font-semibold text-slate-500 hover:text-slate-700"
        >
          상세보기
        </button>
      </div>
    </article>
  );
}
