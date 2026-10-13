"use client";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-rose-100 text-rose-700",
  contacted: "bg-amber-100 text-amber-700",
  done: "bg-emerald-100 text-emerald-700",
};

export default function StatusSelect({
  id,
  status,
  action,
}: {
  id: string;
  status: string;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="inline-block">
      <input type="hidden" name="id" value={id} />
      <select
        name="status"
        defaultValue={status}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className={`rounded-full border-0 px-3 py-1 text-xs font-semibold ${STATUS_COLORS[status] ?? "bg-slate-100 text-slate-600"}`}
      >
        <option value="new">신규</option>
        <option value="contacted">연락함</option>
        <option value="done">완료</option>
      </select>
    </form>
  );
}
