import { NextRequest, NextResponse } from "next/server";
import { getProductDetailImages } from "../../../../lib/cafe24";

export async function GET(request: NextRequest) {
  const idParam = request.nextUrl.searchParams.get("id");
  const id = Number(idParam);
  if (!idParam || Number.isNaN(id)) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  try {
    const images = await getProductDetailImages(id);
    return NextResponse.json({ images });
  } catch (e) {
    return NextResponse.json({ error: "카페24 상품 조회 실패" }, { status: 502 });
  }
}
