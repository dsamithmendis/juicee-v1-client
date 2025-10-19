"use client";

export default function JuiceCardSkeleton() {
  return (
    <div className="rounded-2xl p-4 lg:p-8 shadow-2xl bg-gradient-to-t from-[#f7ede6] to-[#f0c4a5] animate-pulse">
      <div className="h-80 w-full bg-gray-300 rounded-xl mb-4" />
      <div className="h-4 bg-zinc-200 rounded w-full mb-2" />
      <div className="h-4 bg-zinc-200 rounded w-5/6 mb-2" />
      <div className="h-5 bg-zinc-200 rounded w-1/3 mt-3" />
    </div>
  );
}
