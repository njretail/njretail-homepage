'use client';

import { useEffect, useState } from 'react';

export default function DetailModal({ productId, onClose }: { productId: number; onClose: () => void }) {
  const [images, setImages] = useState<string[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setImages(null);
    setError(false);

    fetch(`/api/cafe24/product-detail?id=${productId}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.images && data.images.length > 0) setImages(data.images);
        else setError(true);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [productId]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative my-8 w-full max-w-2xl rounded-2xl bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <h3 className="text-base font-bold text-slate-900">상품 상세정보</h3>
          <button onClick={onClose} className="text-sm text-slate-500 hover:text-slate-700">
            닫기
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto">
          {!images && !error && (
            <div className="flex h-64 items-center justify-center text-sm text-slate-500">불러오는 중...</div>
          )}
          {error && (
            <div className="flex h-64 items-center justify-center text-sm text-slate-500">
              상세 이미지를 불러오지 못했습니다.
            </div>
          )}
          {images?.map((src, idx) => (
            <img key={idx} src={src} alt="" className="block w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
