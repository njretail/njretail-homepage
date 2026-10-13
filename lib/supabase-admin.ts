import { createClient } from "@supabase/supabase-js";

// 서비스 롤 키는 RLS를 우회하는 관리자 권한 키다 — 반드시 서버 코드(서버 액션/API
// 라우트)에서만 쓰고, 클라이언트 컴포넌트에서 절대 import하지 않는다.
// 이 사이트는 로그인 회원 시스템이 없고(주문/문의 폼만 저장) 서버에서만 읽고 쓰므로
// 익명 키 없이 서비스 롤 키 하나로 충분하다.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
