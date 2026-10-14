import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "../../../../lib/supabase-admin";

// 무인매장 솔루션(store-solution)이 점주의 대행 신청을 이 홈페이지 DB로 보내는 서버 간 연동 지점.
// 홈페이지 관리자(/admin)의 "대행 신청" 목록에서 홈페이지 접수 건과 함께 처리한다.
// 브라우저에서 직접 부르는 곳이 아니라 솔루션 서버만 호출한다 — Authorization: Bearer
// <SOLUTION_API_SECRET>로 인증하고, 값이 설정되지 않았으면 항상 401을 돌려준다.
//
// POST: 신청 등록 { store_id, store_name, store_location, name, phone, service_type, message }
// GET ?store_id=...: 그 매장이 솔루션에서 보낸 신청 목록(진행 상태 확인용)

const SERVICE_TYPES = ["입고 및 매대진열", "청소대행", "두 서비스 모두"];

function authorized(request: NextRequest): boolean {
  const secret = process.env.SOLUTION_API_SECRET;
  return !!secret && request.headers.get("authorization") === `Bearer ${secret}`;
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const store_id = String(body?.store_id ?? "").trim();
  const store_name = String(body?.store_name ?? "").trim();
  const store_location = String(body?.store_location ?? "").trim() || store_name;
  const name = String(body?.name ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const service_type = String(body?.service_type ?? "").trim();
  const message = String(body?.message ?? "").trim().slice(0, 2000) || null;

  if (!store_id || !store_name || !name || !phone) {
    return NextResponse.json({ error: "매장, 신청자 이름, 연락처는 필수입니다." }, { status: 400 });
  }
  if (!SERVICE_TYPES.includes(service_type)) {
    return NextResponse.json({ error: "신청 서비스를 선택하세요." }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("agency_requests")
    .insert({
      source: "solution",
      solution_store_id: store_id,
      store_name,
      store_location,
      name,
      phone,
      service_type,
      message,
    })
    .select("id, created_at, service_type, message, status")
    .single();

  if (error) {
    console.error("solution agency request insert failed", error.message);
    return NextResponse.json({ error: "접수 중 오류가 발생했습니다." }, { status: 500 });
  }
  return NextResponse.json({ ok: true, request: data });
}

export async function GET(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const store_id = request.nextUrl.searchParams.get("store_id")?.trim();
  if (!store_id) {
    return NextResponse.json({ error: "store_id가 필요합니다." }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("agency_requests")
    .select("id, created_at, name, service_type, message, status")
    .eq("source", "solution")
    .eq("solution_store_id", store_id)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("solution agency request list failed", error.message);
    return NextResponse.json({ error: "조회 중 오류가 발생했습니다." }, { status: 500 });
  }
  return NextResponse.json({ requests: data ?? [] });
}
