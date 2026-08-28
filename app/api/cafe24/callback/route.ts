import { NextRequest, NextResponse } from "next/server";

// 카페24 앱 관리자 동의(설치) 후 리다이렉트되는 지점.
// 상품 조회는 Front API Key(고정 키) 방식으로만 처리하므로 이 code 값 자체는
// 지금 당장 쓰지 않지만, 리다이렉트가 정상적으로 도착했는지 확인하는 용도로 둔다.
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  return new NextResponse(
    `<!doctype html>
<html lang="ko">
<head><meta charset="utf-8"><title>카페24 연동</title></head>
<body style="font-family: sans-serif; padding: 40px; text-align: center;">
  <h1>카페24 앱 연동 완료</h1>
  <p>${code ? "인증이 정상적으로 완료됐습니다. 이 창은 닫으셔도 됩니다." : "코드가 전달되지 않았습니다."}</p>
</body>
</html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
