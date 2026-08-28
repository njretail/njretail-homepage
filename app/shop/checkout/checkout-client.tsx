'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';

type CartItem = { name: string; price: number; qty: number };

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem('nj_cart');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function CheckoutClient() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const total = items.reduce((s, it) => s + it.qty * it.price, 0);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError('성함, 연락처, 배송지 주소는 필수로 입력해주세요.');
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      // 카페24페이먼츠 결제 연동은 도메인 연결 이후 이 부분에서 실제 결제창을 띄우도록 연결할 예정입니다.
      setError('결제 연동을 준비 중입니다. 곧 이용하실 수 있어요. 급하신 경우 "구매 문의"로 연락해주세요.');
    } finally {
      setSubmitting(false);
    }
  }

  if (hydrated && items.length === 0) {
    return (
      <div className="mt-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <p className="text-base text-slate-500">장바구니가 비어 있습니다.</p>
        <Link href="/shop" className="mt-6 inline-flex rounded-xl bg-[#C8075F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#a8054e]">
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 grid gap-8 lg:grid-cols-3">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#C8075F]"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-slate-700">연락처 *</span>
              <input
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#C8075F]"
                required
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">요청사항</span>
              <textarea
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
        <h2 className="text-lg font-bold text-slate-900">결제 금액</h2>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-slate-600">총 상품금액</span>
          <span className="text-xl font-bold text-slate-900">{total.toLocaleString()}원</span>
        </div>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded-xl bg-[#C8075F] px-4 py-3.5 text-base font-semibold text-white hover:bg-[#a8054e] disabled:opacity-60"
        >
          {submitting ? '처리 중...' : '주문하기'}
        </button>
      </div>
    </form>
  );
}
