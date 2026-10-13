"use client";

import AdminSection from "./AdminSection";

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

function fmtDate(value: string) {
  return new Date(value).toLocaleString("ko-KR");
}

export default function AdminDashboard({
  orders,
  inquiries,
  agencyRequests,
  setOrderStatus,
  setInquiryStatus,
  setAgencyRequestStatus,
}: {
  orders: Order[];
  inquiries: Inquiry[];
  agencyRequests: AgencyRequest[];
  setOrderStatus: (formData: FormData) => void;
  setInquiryStatus: (formData: FormData) => void;
  setAgencyRequestStatus: (formData: FormData) => void;
}) {
  return (
    <>
      <AdminSection<Order>
        title="주문"
        rows={orders}
        statusAction={setOrderStatus}
        emptyText="접수된 주문이 없습니다."
        csvFilenamePrefix="주문내역"
        csvHeaders={["접수일시", "성함", "연락처", "배송지", "상품", "금액", "요청사항", "상태"]}
        csvRow={(o) => [
          fmtDate(o.created_at),
          o.name,
          o.phone,
          o.address,
          o.items.map((it) => `${it.name} x${it.qty}`).join(" / "),
          String(o.total_amount),
          o.note ?? "",
          o.status,
        ]}
        searchFn={(o, q) => o.name.includes(q) || o.phone.includes(q) || o.address.includes(q)}
        columns={[
          { key: "created_at", label: "접수일시", render: (o) => <span className="text-slate-500">{fmtDate(o.created_at)}</span> },
          { key: "name", label: "성함", render: (o) => <span className="font-medium text-slate-900">{o.name}</span> },
          { key: "phone", label: "연락처", render: (o) => o.phone },
          { key: "address", label: "배송지", render: (o) => o.address, className: "max-w-[200px] whitespace-normal" },
          {
            key: "items",
            label: "상품",
            className: "max-w-[220px] whitespace-normal text-slate-500",
            render: (o) => (
              <>
                {o.items.map((it, i) => (
                  <div key={i}>{it.name} × {it.qty}</div>
                ))}
              </>
            ),
          },
          { key: "total_amount", label: "금액", render: (o) => `${o.total_amount.toLocaleString()}원` },
          { key: "note", label: "요청사항", className: "max-w-[180px] whitespace-normal text-slate-500", render: (o) => o.note ?? "-" },
        ]}
      />

      <AdminSection<Inquiry>
        title="문의"
        rows={inquiries}
        statusAction={setInquiryStatus}
        emptyText="접수된 문의가 없습니다."
        csvFilenamePrefix="문의내역"
        csvHeaders={["접수일시", "이름", "연락처", "이메일", "유형", "내용", "상태"]}
        csvRow={(q) => [fmtDate(q.created_at), q.name, q.phone ?? "", q.email ?? "", q.type ?? "", q.message, q.status]}
        searchFn={(q, query) => q.name.includes(query) || (q.phone ?? "").includes(query) || (q.email ?? "").includes(query)}
        columns={[
          { key: "created_at", label: "접수일시", render: (q) => <span className="text-slate-500">{fmtDate(q.created_at)}</span> },
          { key: "name", label: "이름", render: (q) => <span className="font-medium text-slate-900">{q.name}</span> },
          { key: "phone", label: "연락처", render: (q) => q.phone ?? "-" },
          { key: "email", label: "이메일", render: (q) => q.email ?? "-" },
          { key: "type", label: "유형", render: (q) => q.type ?? "-" },
          { key: "message", label: "내용", className: "max-w-[320px] whitespace-normal text-slate-500", render: (q) => q.message },
        ]}
      />

      <AdminSection<AgencyRequest>
        title="대행 신청"
        rows={agencyRequests}
        statusAction={setAgencyRequestStatus}
        emptyText="접수된 대행 신청이 없습니다."
        csvFilenamePrefix="대행신청내역"
        csvHeaders={["접수일시", "이름", "연락처", "신청 서비스", "매장 위치", "신청 내용", "상태"]}
        csvRow={(a) => [fmtDate(a.created_at), a.name, a.phone, a.service_type, a.store_location, a.message ?? "", a.status]}
        searchFn={(a, q) => a.name.includes(q) || a.phone.includes(q) || a.store_location.includes(q)}
        columns={[
          { key: "created_at", label: "접수일시", render: (a) => <span className="text-slate-500">{fmtDate(a.created_at)}</span> },
          { key: "name", label: "이름", render: (a) => <span className="font-medium text-slate-900">{a.name}</span> },
          { key: "phone", label: "연락처", render: (a) => a.phone },
          { key: "service_type", label: "신청 서비스", render: (a) => a.service_type },
          { key: "store_location", label: "매장 위치", className: "max-w-[200px] whitespace-normal", render: (a) => a.store_location },
          { key: "message", label: "신청 내용", className: "max-w-[280px] whitespace-normal text-slate-500", render: (a) => a.message ?? "-" },
        ]}
      />
    </>
  );
}
