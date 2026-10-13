"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { isValidAdminToken, ADMIN_COOKIE_NAME } from "../../lib/admin-auth";
import { createAdminClient } from "../../lib/supabase-admin";

async function requireAdmin() {
  const store = await cookies();
  if (!isValidAdminToken(store.get(ADMIN_COOKIE_NAME)?.value)) {
    throw new Error("관리자 인증이 필요합니다.");
  }
}

export async function setOrderStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["new", "contacted", "done"].includes(status)) return;

  const admin = createAdminClient();
  await admin.from("orders").update({ status }).eq("id", id);
  revalidatePath("/admin");
}

export async function setInquiryStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["new", "contacted", "done"].includes(status)) return;

  const admin = createAdminClient();
  await admin.from("inquiries").update({ status }).eq("id", id);
  revalidatePath("/admin");
}

export async function setAgencyRequestStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["new", "contacted", "done"].includes(status)) return;

  const admin = createAdminClient();
  await admin.from("agency_requests").update({ status }).eq("id", id);
  revalidatePath("/admin");
}
