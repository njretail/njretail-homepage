"use server";

import { createAdminClient } from "../../lib/supabase-admin";

export type SubmitInquiryState = { error: string | null; success: boolean };

export async function submitInquiry(
  _prevState: SubmitInquiryState,
  formData: FormData
): Promise<SubmitInquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const email = String(formData.get("email") ?? "").trim() || null;
  const type = String(formData.get("type") ?? "").trim() || null;
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !message) {
    return { error: "이름과 문의 내용은 필수로 입력해주세요.", success: false };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("inquiries").insert({ name, phone, email, type, message });

  if (error) {
    return { error: `접수 중 오류가 발생했습니다: ${error.message}`, success: false };
  }

  return { error: null, success: true };
}
