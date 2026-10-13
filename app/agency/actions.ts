"use server";

import { createAdminClient } from "../../lib/supabase-admin";

export type SubmitAgencyState = { error: string | null; success: boolean };

export async function submitAgencyRequest(
  _prevState: SubmitAgencyState,
  formData: FormData
): Promise<SubmitAgencyState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service_type = String(formData.get("service_type") ?? "").trim();
  const store_location = String(formData.get("store_location") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim() || null;

  if (!name || !phone || !service_type || !store_location) {
    return { error: "이름, 연락처, 신청 서비스, 매장 위치는 필수로 입력해주세요.", success: false };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("agency_requests").insert({
    name,
    phone,
    service_type,
    store_location,
    message,
  });

  if (error) {
    return { error: `접수 중 오류가 발생했습니다: ${error.message}`, success: false };
  }

  return { error: null, success: true };
}
