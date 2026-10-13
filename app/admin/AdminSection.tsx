"use client";

import { useMemo, useState, type ReactNode } from "react";
import StatusSelect from "./StatusSelect";
import { downloadCsv } from "../../lib/csv";

type Status = "new" | "contacted" | "done";
type BaseRow = { id: string; status: Status };

type Column<T> = {
  key: string;
  label: string;
  render: (row: T) => ReactNode;
  className?: string;
};

const STATUS_TABS: { value: Status | "all"; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "new", label: "신규" },
  { value: "contacted", label: "연락함" },
  { value: "done", label: "완료" },
];

export default function AdminSection<T extends BaseRow>({
  title,
  rows,
  columns,
  csvFilenamePrefix,
  csvHeaders,
  csvRow,
  searchFn,
  statusAction,
  emptyText,
}: {
  title: string;
  rows: T[];
  columns: Column<T>[];
  csvFilenamePrefix: string;
  csvHeaders: string[];
  csvRow: (row: T) => string[];
  searchFn: (row: T, query: string) => boolean;
  statusAction: (formData: FormData) => void;
  emptyText: string;
}) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | "all">("all");

  const counts = useMemo(() => {
    const c: Record<Status, number> = { new: 0, contacted: 0, done: 0 };
    for (const row of rows) c[row.status]++;
    return c;
  }, [rows]);

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      if (statusFilter !== "all" && row.status !== statusFilter) return false;
      if (query.trim() && !searchFn(row, query.trim())) return false;
      return true;
    });
  }, [rows, query, statusFilter, searchFn]);

  function handleDownload() {
    const date = new Date().toISOString().slice(0, 10);
    downloadCsv(`${csvFilenamePrefix}_${date}.csv`, csvHeaders, filtered.map(csvRow));
  }

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-slate-900">{title} ({rows.length})</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="이름 · 연락처 검색"
            className="w-44 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 outline-none focus:border-[#C8075F]"
          />
          <button
            type="button"
            onClick={handleDownload}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            엑셀 다운로드
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setStatusFilter(tab.value)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              statusFilter === tab.value
                ? "border-[#C8075F] bg-[#FCE7F0] text-[#C8075F]"
                : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
            }`}
          >
            {tab.label}{tab.value !== "all" ? ` ${counts[tab.value]}` : ""}
          </button>
        ))}
      </div>

      <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full whitespace-nowrap text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3">{col.label}</th>
              ))}
              <th className="px-4 py-3">상태</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-t border-slate-100 align-top">
                {columns.map((col) => (
                  <td key={col.key} className={`px-4 py-3 ${col.className ?? ""}`}>{col.render(row)}</td>
                ))}
                <td className="px-4 py-3">
                  <StatusSelect id={row.id} status={row.status} action={statusAction} />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-10 text-center text-slate-400">
                  {rows.length === 0 ? emptyText : "검색 결과가 없습니다."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
