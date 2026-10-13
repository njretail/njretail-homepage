import { createHash } from "node:crypto";

const COOKIE_NAME = "admin_auth";

// 회원 시스템이 없는 가벼운 내부용 관리자 화면이라, 공유 비밀번호 하나로만 보호한다.
// 쿠키에는 비밀번호 원문 대신 해시값만 담아서, 쿠키 값만 봐서는 비밀번호를 알 수 없게 한다.
function expectedToken(): string {
  const password = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256").update(`njretail-admin:${password}`).digest("hex");
}

export function checkAdminPassword(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD ?? "";
  return password.length > 0 && input === password;
}

export { COOKIE_NAME as ADMIN_COOKIE_NAME };

export function adminSessionToken(): string {
  return expectedToken();
}

export function isValidAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  return token === expectedToken();
}
