'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

export default function ProductCard({ product }: { product: Product }) {
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
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Link href={`/shop/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-24 w-full object-cover sm:h-40 md:h-56 lg:h-64" />
      </Link>
      <div className="flex flex-1 flex-col p-2.5 sm:p-4 lg:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8075F] sm:text-xs sm:tracking-[0.18em]">
          {product.category}
        </div>
        <h3 className="mt-1.5 line-clamp-2 text-xs font-bold text-slate-900 sm:mt-3 sm:text-base lg:text-xl">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-bold text-slate-900 sm:mt-4 sm:text-lg lg:text-2xl">{product.price}</p>

        <div className="mt-auto pt-2.5 sm:pt-5">
          <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center rounded-lg border border-[#C8075F] bg-white px-1 py-1.5 text-[10px] font-semibold leading-tight text-[#C8075F] hover:bg-[#FDEEF4] sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
            >
              장바구니 담기
            </button>
            <button
              onClick={handleBuyNow}
              className="inline-flex items-center justify-center rounded-lg bg-[#C8075F] px-1 py-1.5 text-[10px] font-semibold leading-tight text-white hover:bg-[#a8054e] sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
