"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GenderPage() {
  const [gender, setGender] = useState<"man" | "woman" | null>(null);
  const router = useRouter();

  return (
   <main className="min-h-screen bg-[#FFEDF5] px-5 sm:px-0 ">

     
      <section className="min-h-screen max-w-[375px] mx-auto px-6 pt-6 pb-6 flex flex-col ">

        
        <button onClick={() => router.back()} className="w-fit text-[#5B3765]">
          <ChevronLeft size={24} />
        </button>

        
        <h1 className="mt-6 text-[24px] font-semibold leading-snug text-black flex justify-center mb-8">
          Let’s start by choosing <br /> your gender!
        </h1>

        
<div className="mt-10 flex justify-between mx-auto w-full max-w-[340px] gap-4">


  <button
  onClick={() => setGender("man")}
  className={`
    w-[158px] h-[212px]
    rounded-[20px]
    border-2
    bg-[#F2F0EA]
    flex flex-col
    items-center
    ${gender === "man" ? "border-[#5B3765]" : "border-[#E6D6DF]"}
  `}
>

  <span className="mt-3 text-sm font-bold text-black">
    Man
  </span>


  <div className="flex-1 flex items-center justify-center">
    <Image
      src="/man1.png"
      alt="Man"
      width={120}
      height={120}
      priority
    />
  </div>
</button>

<button
  onClick={() => setGender("woman")}
  className={`
    w-[158px] h-[212px]
    rounded-[20px]
    border-2
    bg-[#F2F0EA]
    flex flex-col
    items-center
    ${gender === "woman" ? "border-[#5B3765]" : "border-[#E6D6DF]"}
  `}
>

  <span className="mt-3 text-sm font-bold text-black">
    Woman
  </span>

  <div className="flex-1 flex items-center justify-center">
    <Image
      src="/woman1.png"
      alt="Woman"
      width={120}
      height={120}
      priority
    />
  </div>
</button>

</div>


    
        <div className="flex-1 flex items-end justify-center">
          <button
            disabled={!gender}
            onClick={() => router.push("/onboarding/name")}
            className={`transition ${
              !gender
                ? "opacity-40 pointer-events-none"
                : "active:scale-95"
            }`}
          >
            <Image
              src="/btn-arrow.png"
              alt="Next"
              width={80}
              height={80}
              priority
            />
          </button>
        </div>

      </section>
    </main>
  );
}
