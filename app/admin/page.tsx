import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isValidAdminToken, ADMIN_COOKIE_NAME } from "../../lib/admin-auth";
import { createAdminClient } from "../../lib/supabase-admin";
import { logout } from "./login/actions";
import { setOrderStatus, setInquiryStatus, setAgencyRequestStatus } from "./actions";
import AdminDashboard from "./AdminDashboard";

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

  const totalCount = orders.length + inquiries.length + agencyRequests.length;
  const newCount =
    orders.filter((o) => o.status === "new").length +
    inquiries.filter((q) => q.status === "new").length +
    agencyRequests.filter((a) => a.status === "new").length;
  const doneCount =
    orders.filter((o) => o.status === "done").length +
    inquiries.filter((q) => q.status === "done").length +
    agencyRequests.filter((a) => a.status === "done").length;

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

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-medium text-slate-500">전체 접수</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{totalCount}</p>
          </div>
          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
            <p className="text-xs font-medium text-rose-600">신규 (확인 필요)</p>
            <p className="mt-1 text-2xl font-bold text-rose-700">{newCount}</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-xs font-medium text-emerald-600">처리 완료</p>
            <p className="mt-1 text-2xl font-bold text-emerald-700">{doneCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-medium text-slate-500">주문 / 문의 / 대행</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{orders.length} / {inquiries.length} / {agencyRequests.length}</p>
          </div>
        </div>

        <AdminDashboard
          orders={orders}
          inquiries={inquiries}
          agencyRequests={agencyRequests}
          setOrderStatus={setOrderStatus}
          setInquiryStatus={setInquiryStatus}
          setAgencyRequestStatus={setAgencyRequestStatus}
        />
      </div>
    </div>
  );
}
