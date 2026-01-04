"use client";

import { ChevronLeft } from "lucide-react";

export default function QuizHeader({ onBack }) {
  return (
    <div className="absolute top-[24px] left-[20px]">
      <button
        onClick={onBack}
        className="outline-none border-none focus:outline-none active:outline-none active:bg-transparent"
      >
        <ChevronLeft size={24} />
      </button>
    </div>
  );
}
