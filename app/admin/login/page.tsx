"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form action={formAction} className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-slate-900">관리자 로그인</h1>
        <p className="mt-1 text-sm text-slate-500">엔제이리테일 홈페이지 주문/문의 관리</p>

        <label className="mt-6 block text-sm">
          <span className="font-medium text-slate-700">비밀번호</span>
          <input
            type="password"
            name="password"
            autoFocus
            required
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-[#C8075F]"
          />
        </label>

        {state.error && <p className="mt-3 text-sm text-red-500">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full rounded-xl bg-[#C8075F] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a8054e] disabled:opacity-60"
        >
          {pending ? "확인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}
