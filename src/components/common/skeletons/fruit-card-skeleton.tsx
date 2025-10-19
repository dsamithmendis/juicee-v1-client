"use client";

import React from "react";

export default function FruitCardSkeleton() {
  return (
    <div className="rounded-2xl p-2 h-[480px] md:h-80 lg:p-4 w-full flex flex-col items-center justify-center shadow-2xl bg-gradient-to-b from-[#f7ede6] to-[#f0c4a5] animate-pulse overflow-hidden">
      <div className="h-full w-full bg-gray-300 rounded-2xl" />
    </div>
  );
}
