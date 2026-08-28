'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { addItemToCart } from '../../../../lib/cart';

type Product = { id: number; name: string; price: string };

export default function DetailActions({ product }: { product: Product }) {
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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={handleAddToCart}
          className="flex-1 rounded-xl border border-[#C8075F] bg-white px-4 py-3.5 text-sm font-semibold text-[#C8075F] hover:bg-[#FDEEF4] sm:text-base"
        >
          장바구니 담기
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 rounded-xl bg-[#C8075F] px-4 py-3.5 text-sm font-semibold text-white hover:bg-[#a8054e] sm:text-base"
        >
          주문하기
        </button>
      </div>
    </div>
  );
}
