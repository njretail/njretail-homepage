import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isValidAdminToken, ADMIN_COOKIE_NAME } from "../../lib/admin-auth";
import { createAdminClient } from "../../lib/supabase-admin";
import { logout } from "./login/actions";
import { setOrderStatus, setInquiryStatus, setAgencyRequestStatus } from "./actions";
import StatusSelect from "./StatusSelect";

export const dynamic = "force-dynamic";

type Order = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  address: string;
  note: string | null;
  items: { name: string; price: number; qty: number }[];
  total_amount: number;
  status: "new" | "contacted" | "done";
};

type Inquiry = {
  id: string;
  created_at: string;
  name: string;
  phone: string | null;
  email: string | null;
  type: string | null;
  message: string;
  status: "new" | "contacted" | "done";
};

type AgencyRequest = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  service_type: string;
  store_location: string;
  message: string | null;
  status: "new" | "contacted" | "done";
};

export default async function AdminPage() {
  const store = await cookies();
  if (!isValidAdminToken(store.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/login");
  }

  const admin = createAdminClient();
  const [{ data: ordersData }, { data: inquiriesData }, { data: agencyRequestsData }] = await Promise.all([
    admin.from("orders").select("*").order("created_at", { ascending: false }),
    admin.from("inquiries").select("*").order("created_at", { ascending: false }),
    admin.from("agency_requests").select("*").order("created_at", { ascending: false }),
  ]);

  const orders = (ordersData ?? []) as Order[];
  const inquiries = (inquiriesData ?? []) as Inquiry[];
  const agencyRequests = (agencyRequestsData ?? []) as AgencyRequest[];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">주문 · 문의 · 대행 신청 관리</h1>
            <p className="mt-1 text-sm text-slate-500">엔제이리테일 홈페이지에 접수된 내역입니다.</p>
          </div>
          <form action={logout}>
            <button type="submit" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
              로그아웃
            </button>
          </form>
        </div>

        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-900">주문 ({orders.length})</h2>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full whitespace-nowrap text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3">접수일시</th>
                  <th className="px-4 py-3">성함</th>
                  <th className="px-4 py-3">연락처</th>
                  <th className="px-4 py-3">배송지</th>
                  <th className="px-4 py-3">상품</th>
                  <th className="px-4 py-3">금액</th>
                  <th className="px-4 py-3">요청사항</th>
                  <th className="px-4 py-3">상태</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 text-slate-500">{new Date(o.created_at).toLocaleString("ko-KR")}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{o.name}</td>
                    <td className="px-4 py-3">{o.phone}</td>
                    <td className="px-4 py-3 max-w-[200px] whitespace-normal">{o.address}</td>
                    <td className="px-4 py-3 max-w-[220px] whitespace-normal text-slate-500">
                      {o.items.map((it, i) => (
                        <div key={i}>{it.name} × {it.qty}</div>
                      ))}
                    </td>
                    <td className="px-4 py-3">{o.total_amount.toLocaleString()}원</td>
                    <td className="px-4 py-3 max-w-[180px] whitespace-normal text-slate-500">{o.note ?? "-"}</td>
                    <td className="px-4 py-3">
                      <StatusSelect id={o.id} status={o.status} action={setOrderStatus} />
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-10 text-center text-slate-400">접수된 주문이 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-900">문의 ({inquiries.length})</h2>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full whitespace-nowrap text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3">접수일시</th>
                  <th className="px-4 py-3">이름</th>
                  <th className="px-4 py-3">연락처</th>
                  <th className="px-4 py-3">이메일</th>
                  <th className="px-4 py-3">유형</th>
                  <th className="px-4 py-3">내용</th>
                  <th className="px-4 py-3">상태</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((q) => (
                  <tr key={q.id} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 text-slate-500">{new Date(q.created_at).toLocaleString("ko-KR")}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{q.name}</td>
                    <td className="px-4 py-3">{q.phone ?? "-"}</td>
                    <td className="px-4 py-3">{q.email ?? "-"}</td>
                    <td className="px-4 py-3">{q.type ?? "-"}</td>
                    <td className="px-4 py-3 max-w-[320px] whitespace-normal text-slate-500">{q.message}</td>
                    <td className="px-4 py-3">
                      <StatusSelect id={q.id} status={q.status} action={setInquiryStatus} />
                    </td>
                  </tr>
                ))}
                {inquiries.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-slate-400">접수된 문의가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-900">대행 신청 ({agencyRequests.length})</h2>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full whitespace-nowrap text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3">접수일시</th>
                  <th className="px-4 py-3">이름</th>
                  <th className="px-4 py-3">연락처</th>
                  <th className="px-4 py-3">신청 서비스</th>
                  <th className="px-4 py-3">매장 위치</th>
                  <th className="px-4 py-3">신청 내용</th>
                  <th className="px-4 py-3">상태</th>
                </tr>
              </thead>
              <tbody>
                {agencyRequests.map((a) => (
                  <tr key={a.id} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 text-slate-500">{new Date(a.created_at).toLocaleString("ko-KR")}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{a.name}</td>
                    <td className="px-4 py-3">{a.phone}</td>
                    <td className="px-4 py-3">{a.service_type}</td>
                    <td className="px-4 py-3 max-w-[200px] whitespace-normal">{a.store_location}</td>
                    <td className="px-4 py-3 max-w-[280px] whitespace-normal text-slate-500">{a.message ?? "-"}</td>
                    <td className="px-4 py-3">
                      <StatusSelect id={a.id} status={a.status} action={setAgencyRequestStatus} />
                    </td>
                  </tr>
                ))}
                {agencyRequests.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-slate-400">접수된 대행 신청이 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
