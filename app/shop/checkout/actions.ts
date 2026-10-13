"use server";

import { createAdminClient } from "../../../lib/supabase-admin";

export type SubmitOrderState = { error: string | null; success: boolean };

export async function submitOrder(
  _prevState: SubmitOrderState,
  formData: FormData
): Promise<SubmitOrderState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim() || null;
  const itemsRaw = String(formData.get("items") ?? "[]");
  const total_amount = Number(formData.get("total") ?? 0);

  if (!name || !phone || !address) {
    return { error: "성함, 연락처, 배송지 주소는 필수로 입력해주세요.", success: false };
  }

  let items: unknown;
  try {
    items = JSON.parse(itemsRaw);
  } catch {
    return { error: "장바구니 정보가 올바르지 않습니다.", success: false };
  }
  if (!Array.isArray(items) || items.length === 0) {
    return { error: "장바구니가 비어 있습니다.", success: false };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("orders").insert({
    name,
    phone,
    address,
    note,
    items,
    total_amount,
  });

  if (error) {
    return { error: `접수 중 오류가 발생했습니다: ${error.message}`, success: false };
  }

  return { error: null, success: true };
}
