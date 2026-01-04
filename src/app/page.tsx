"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#5B3765]">
   
      <section className="min-h-screen w-full max-w-md mx-auto flex flex-col justify-between px-6 py-10">
        
     
        <div className="h-10" />

    
        <div className="flex justify-center">
          <Image
            src="/logo2.png"
            alt="WingMann branding"
            width={220}
            height={180}
            priority
            className="object-contain"
          />
        </div>

     
        <div className="flex flex-col gap-3 w-half mx-auto">
          <button
            onClick={() => router.push("/onboarding/gender")}
            className="
              w-full
              bg-white
              py-[14px]
              
              text-[16px]
              font-[570]
              text-black
              rounded-[14px]
              shadow-[0_8px_24px_rgba(0,0,0,0.08)]
              transition
              active:scale-[0.97]
            "
          >
            Connect to Google
          </button>

          <p className="text-center text-[11px] text-white/70 leading-snug">
            By continuing, I agree to all the terms and conditions.
          </p>
        </div>

      </section>
    </main>
  );
}
