"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NamePage() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
   <main className="min-h-screen bg-[#FFEDF5] flex justify-center">
  <section className="min-h-screen w-full max-w-[375px] px-[15px] pt-[125px] pb-6 flex flex-col relative">


  <button
  onClick={() => router.back()}
  className="absolute top-[24px] left-[15px] outline-none border-none focus:outline-none active:outline-none active:bg-transparent"
>
  <ChevronLeft size={24} />
</button>




    <div className="space-y-2">
      <h1 className="text-[26px] font-semibold text-black">
        Cool, what’s your name?
      </h1>
      <p className="text-[15px] text-black/60">
        I’ll save it as your display name.
      </p>
    </div>


    <div className="w-[334px] mt-6">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="
          w-full
          h-[56px]
          rounded-[18px]
          border-2
          border-[#5B3765]
          px-5
          text-[16px]
          outline-none
          bg-white
          placeholder:text-black/60
        "
      />
    </div>

 
   <div className="flex-1 flex items-end justify-center pb-8">
  <button
  disabled={!name.trim()}
  onClick={() => router.push("/onboarding/welcome")}
  className={`
    w-[80px] h-[78px]
    flex items-center justify-center
    transition
    outline-none border-none
    focus:outline-none active:outline-none
    active:bg-transparent
    ${!name.trim() ? "opacity-40 pointer-events-none" : "active:scale-95"}
  `}
>
  <Image
    src="/btn-arrow.png"
    width={80}
    height={78}
    alt="Next"
  />
</button>

</div>


  </section>
</main>

  );
}
