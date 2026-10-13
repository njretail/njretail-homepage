'use client';

import { useActionState } from 'react';
import { submitAgencyRequest, type SubmitAgencyState } from './actions';

const initialState: SubmitAgencyState = { error: null, success: false };

export default function AgencyForm() {
  const [state, formAction, pending] = useActionState(submitAgencyRequest, initialState);

  if (state.success) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
        <p className="text-xl font-bold text-slate-900">대행 신청이 접수되었습니다</p>
        <p className="mt-2 text-base text-slate-500">입력하신 연락처로 빠르게 확인 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="agency-name" className="mb-2 block text-sm font-medium text-slate-700">이름</label>
          <input id="agency-name" name="name" type="text" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="홍길동" />
        </div>
        <div>
          <label htmlFor="agency-phone" className="mb-2 block text-sm font-medium text-slate-700">연락처</label>
          <input id="agency-phone" name="phone" type="tel" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="010-1234-5678" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="agency-type" className="mb-2 block text-sm font-medium text-slate-700">신청 서비스</label>
          <select id="agency-type" name="service_type" required defaultValue="" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]">
            <option value="">서비스를 선택해 주세요</option>
            <option>입고 및 매대진열</option>
            <option>청소대행</option>
            <option>두 서비스 모두</option>
          </select>
        </div>
        <div>
          <label htmlFor="agency-store" className="mb-2 block text-sm font-medium text-slate-700">매장 위치</label>
          <input id="agency-store" name="store_location" type="text" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="서울시 성북구" />
        </div>
      </div>
      <div>
        <label htmlFor="agency-message" className="mb-2 block text-sm font-medium text-slate-700">신청 내용</label>
        <textarea id="agency-message" name="message" rows={5} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="희망 일정과 필요한 업무를 적어 주세요." />
      </div>

      {state.error && <p className="text-center text-sm text-red-500">{state.error}</p>}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-xl bg-[#C8075F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a8054e] disabled:opacity-60"
        >
          {pending ? '접수 중...' : '대행 신청 접수하기'}
        </button>
      </div>
    </form>
  );
}
