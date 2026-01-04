"use client";

import Image from "next/image";

export default function QuizFooter({ onNext, disabled }) {
  return (
    <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 w-[80px] h-[78px] overflow-hidden">
  <button
    onClick={onNext}
    disabled={disabled}
    className={`
      w-full h-full
      flex items-center justify-center
      outline-none border-none
      transition
      ${disabled ? "opacity-40 pointer-events-none" : "active:scale-95"}
    `}
  >
    <Image
      src="/btn-arrow.png"
      width={80}
      height={78}
      alt="Next"
      className="block"
    />
  </button>
</div>

  );
}
