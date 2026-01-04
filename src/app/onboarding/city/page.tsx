"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CityPage() {
  const router = useRouter();


  useEffect(() => {
    const t = setTimeout(() => {
      router.push("/dashboard");
    }, 2200);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <main className="min-h-screen bg-[#5B3765] flex justify-center">
      <section className="relative w-full max-w-[375px] min-h-screen overflow-hidden flex flex-col items-center">

     
        <Image
          src="/confetti.png"
          alt="Confetti"
          fill
          priority
          className="object-cover opacity-90 pointer-events-none"
        />


        <div className="relative z-10 mt-[180px] px-6 text-center">
          <h1 className="text-white text-[32px] font-serif leading-snug">
            Sweet — the city
            <br />
            of Lakes
            <br />
            And culture
          </h1>
        </div>

       

      </section>
    </main>
  );
}
