'use client';

import { useActionState, useEffect, useState } from 'react';
import Link from 'next/link';
import { clearCart } from '../../../lib/cart';
import { submitOrder, type SubmitOrderState } from './actions';

type CartItem = { name: string; price: number; qty: number };

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem('nj_cart');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

const initialState: SubmitOrderState = { error: null, success: false };

export default function CheckoutClient() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [state, formAction, pending] = useActionState(submitOrder, initialState);

  /* eslint-disable react-hooks/set-state-in-effect -- localStorage는 서버 렌더링 때
     없으므로, 마운트 후에만 장바구니를 읽어 하이드레이션 불일치를 피한다. */
  useEffect(() => {
    setItems(readCart());
    setHydrated(true);
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
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (state.success) clearCart();
  }, [state.success]);

  const total = items.reduce((s, it) => s + it.qty * it.price, 0);

  if (state.success) {
    return (
      <div className="mt-16 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
        <p className="text-xl font-bold text-slate-900">주문이 접수되었습니다</p>
        <p className="mt-2 text-base text-slate-500">
          입력하신 연락처로 곧 연락드려 결제 및 배송 안내를 도와드릴게요.
        </p>
        <Link href="/shop" className="mt-6 inline-flex rounded-xl bg-[#C8075F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#a8054e]">
          취급 품목으로 돌아가기
        </Link>
      </div>
    );
  }

  if (hydrated && items.length === 0) {
    return (
      <div className="mt-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <p className="text-base text-slate-500">장바구니가 비어 있습니다.</p>
        <Link href="/shop" className="mt-6 inline-flex rounded-xl bg-[#C8075F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#a8054e]">
          취급 품목으로 가기
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-12 grid gap-8 lg:grid-cols-3">
      <input type="hidden" name="items" value={JSON.stringify(items)} />
      <input type="hidden" name="total" value={total} />

      <div className="space-y-6 lg:col-span-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">주문 상품</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium text-slate-900">{it.name}</div>
                  <div className="text-sm text-slate-500">수량: {it.qty}</div>
                </div>
                <div className="font-medium text-slate-900">{(it.price * it.qty).toLocaleString()}원</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">주문자 / 배송 정보</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium text-slate-700">성함 *</span>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#C8075F]"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-slate-700">연락처 *</span>
              <input
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#C8075F]"
                required
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">배송지 주소 *</span>
              <input
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#C8075F]"
                required
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">요청사항</span>
              <textarea
                name="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#C8075F]"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">주문 금액</h2>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-slate-600">총 상품금액</span>
          <span className="text-xl font-bold text-slate-900">{total.toLocaleString()}원</span>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-400">
          결제 연동 준비 중이라, 지금은 주문 내용만 먼저 접수됩니다. 입력하신 연락처로
          확인 연락을 드려요.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          배송비는 별도로 부과될 수 있으며, 상품 가격은 시세에 따라 변동될 수 있습니다.
          최종 금액은 확인 연락 시 안내해 드려요.
        </p>

        {state.error && <p className="mt-4 text-sm text-red-500">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full rounded-xl bg-[#C8075F] px-4 py-3.5 text-base font-semibold text-white hover:bg-[#a8054e] disabled:opacity-60"
        >
          {pending ? '접수 중...' : '주문 접수하기'}
        </button>
      </div>
    </form>
  );
}
