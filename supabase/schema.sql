-- njretail-homepage: 주문/문의 폼 저장용 스키마.
-- Supabase 프로젝트의 SQL Editor에 붙여넣고 실행하세요.
-- 로그인 회원 시스템이 없는 사이트라 RLS는 켜두되 공개 정책은 두지 않는다 —
-- 서버 쪽에서 서비스 롤 키로만 읽고 쓴다(클라이언트에서 직접 접근 불가).

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  address text not null,
  note text,
  items jsonb not null,
  total_amount integer not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'done'))
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text,
  email text,
  type text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'done'))
);

create table if not exists public.agency_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  service_type text not null,
  store_location text not null,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'done'))
);

alter table public.orders enable row level security;
alter table public.inquiries enable row level security;
alter table public.agency_requests enable row level security;
-- 공개 정책을 두지 않음 — service_role 키로만 접근(서버 액션에서만 사용).
