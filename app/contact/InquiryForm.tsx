'use client';

import { useActionState } from 'react';
import { submitInquiry, type SubmitInquiryState } from './actions';

const initialState: SubmitInquiryState = { error: null, success: false };

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.success) {
    return (
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
        <p className="text-xl font-bold text-slate-900">문의가 접수되었습니다</p>
        <p className="mt-2 text-base text-slate-500">입력하신 연락처로 빠르게 확인 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mx-auto mt-8 max-w-3xl space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">이름</label>
          <input id="name" name="name" type="text" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-[#C8075F]" placeholder="홍길동" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">연락처</label>
          <input id="phone" name="phone" type="tel" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-[#C8075F]" placeholder="010-1234-5678" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">이메일</label>
          <input id="email" name="email" type="email" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-[#C8075F]" placeholder="name@example.com" />
        </div>
        <div>
          <label htmlFor="type" className="mb-2 block text-sm font-medium text-slate-700">문의 유형</label>
          <select id="type" name="type" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-0 focus:border-[#C8075F]">
            <option>무인매장 창업 상담</option>
            <option>운영시스템 문의</option>
            <option>입고 및 매대진열 대행 신청</option>
            <option>청소대행 신청</option>
            <option>취급 품목 관련</option>
            <option>기타</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">문의 내용</label>
        <textarea id="message" name="message" rows={6} required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-[#C8075F]" placeholder="상담하고 싶은 내용을 입력해 주세요." />
      </div>

      {state.error && <p className="text-center text-sm text-red-500">{state.error}</p>}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-xl bg-[#C8075F] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#a8054e] disabled:opacity-60"
        >
          {pending ? '전송 중...' : '문의 보내기'}
        </button>
      </div>
    </form>
  );
}
