"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const gender: "man" | "woman" = "man";
const name = "Ankit";

export default function WelcomePage() {
  const router = useRouter();


  useEffect(() => {
    const t = setTimeout(() => {
      router.push("/onboarding/birthday");
    }, 2000);
    return () => clearTimeout(t);
  }, [router]);

 
  const characterImage =
    gender === "man"
      ? "/character.png"
      : "/charactermale.png";

  return (
    <main className="min-h-screen bg-[#5B3765] flex justify-center">
      <section className="relative w-full max-w-[375px] min-h-screen overflow-hidden flex flex-col items-center">

    
        <Image
          src="/confetti.png"   
          alt="Celebration"
          fill
          className="object-cover opacity-90 pointer-events-none"
          priority
        />

     
        <div className="relative z-10 mt-[160px] text-center px-6">
          <h1 className="text-white text-[28px] font-semibold leading-snug">
            Hey {name},
            <br />
            I’m your WingMann,
          </h1>

          <p className="mt-3 text-white/80 text-[16px]">
            let’s find you a great date!
          </p>
        </div>

        <div className="relative z-10 mt-auto w-full flex justify-center pb-6">
          <Image
            src={characterImage}
            alt="Welcome character"
            width={300}
            height={360}
            priority
            className="object-contain"
          />
        </div>

      </section>
    </main>
  );
}
