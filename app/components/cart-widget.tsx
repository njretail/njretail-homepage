'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type CartItem = { name: string; price: number; qty: number };

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem('nj_cart');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  localStorage.setItem('nj_cart', JSON.stringify(items));
  // notify other listeners
  window.dispatchEvent(new CustomEvent('njcart:update'));
}

export default function CartWidget() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(readCart());
    function handler() {
      setItems(readCart());
    }
    window.addEventListener('njcart:update', handler as EventListener);
    window.addEventListener('storage', handler as EventListener);
    return () => {
      window.removeEventListener('njcart:update', handler as EventListener);
      window.removeEventListener('storage', handler as EventListener);
    };
  }, []);

  const count = items.reduce((s, it) => s + it.qty, 0);
  const total = items.reduce((s, it) => s + it.qty * it.price, 0);

  function removeItem(idx: number) {
    const next = items.slice();
    next.splice(idx, 1);
    writeCart(next);
    setItems(next);
  }

  function clearCart() {
    writeCart([]);
    setItems([]);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="장바구니 열기"
        className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full bg-[#C8075F] px-4 py-3 text-white shadow-lg"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14l-2-8M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
        <span className="text-sm font-semibold">장바구니</span>
        <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#C8075F]">{count}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative m-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">장바구니</h3>
              <button onClick={() => setOpen(false)} className="text-slate-500">닫기</button>
            </div>

            <div className="mt-4 max-h-72 space-y-4 overflow-auto">
              {items.length === 0 && <div className="text-sm text-slate-500">장바구니가 비어 있습니다.</div>}
              {items.map((it, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-900">{it.name}</div>
                    <div className="text-sm text-slate-600">수량: {it.qty}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="font-medium text-slate-900">{it.price.toLocaleString()}원</div>
                    <button className="mt-2 text-xs text-red-500" onClick={() => removeItem(idx)}>삭제</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
              <div>
                <div className="text-sm text-slate-600">총 합계</div>
                <div className="text-xl font-bold text-slate-900">{total.toLocaleString()}원</div>
              </div>
              <div className="flex gap-2">
                <button onClick={clearCart} className="rounded-xl border border-slate-200 px-4 py-2 text-sm">비우기</button>
                <Link href="/contact" className="rounded-xl bg-[#C8075F] px-4 py-2 text-sm font-semibold text-white">구매 문의</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
