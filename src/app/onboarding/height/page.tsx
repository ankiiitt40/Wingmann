"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Picker from "react-mobile-picker";

export default function HeightPage() {
  const router = useRouter();

  const heights = Array.from({ length: 19 }, (_, i) =>
    (5.9 - i * 0.1).toFixed(1)
  );

  const [value, setValue] = useState({
    height: "5.3",
  });

  return (
    <main className="min-h-screen bg-[#FFEDF5] flex justify-center">
      <section className="relative w-full max-w-[375px] min-h-screen px-[15px] pt-[125px] flex flex-col">

       
       <button
  onClick={() => router.back()}
  className="absolute top-[24px] left-[15px] outline-none border-none focus:outline-none active:outline-none active:bg-transparent"
>
  <ChevronLeft size={24} />
</button>


       
        <h1 className="text-[26px] font-semibold text-black">
          Now tell me, how tall are you?
        </h1>
        <p className="mt-2 text-[15px] text-black/60">
          Just getting the full picture of you.
        </p>

     
        <div className="mt-10 flex gap-4">

    
          <div className="relative w-[120px] h-[360px] bg-[#5B3765] rounded-[22px] flex items-end justify-center">
            <Image
              src="/character-male.png"
              alt="Character"
              width={160}
              height={260}
              className="absolute -right-10 bottom-0 pointer-events-none"
              priority
            />
          </div>

    
          <div className="relative flex-1 h-[360px] flex">

            {/* SCALE (LEFT) */}
            <div className="w-[36px] flex flex-col justify-between text-[12px] text-black/50">
              {heights.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-[80px] h-[260px] bg-white rounded-[18px] flex items-center justify-center">
                <Picker
                  value={value}
                  onChange={setValue}
                  wheelMode="natural"
                >
                  <Picker.Column name="height">
                    {heights.map((h) => (
                      <Picker.Item key={h} value={h}>
                        {h}
                      </Picker.Item>
                    ))}
                  </Picker.Column>
                </Picker>
              </div>
            </div>

            <div className="w-[90px] flex flex-col items-center pt-[100px]">
              <div className="w-[80px] h-[56px] border-2 border-[#5B3765] rounded-[14px] bg-white flex items-center justify-center text-[18px] font-semibold">
                {value.height}
              </div>
              <span className="mt-1 text-[13px] text-black/60">
                Ft
              </span>
            </div>

          </div>
        </div>


        <div className="flex-1 flex items-end justify-center pb-8">
          <button
            onClick={() => router.push("/onboarding/location")}
            className="w-[80px] h-[78px] active:scale-95 outline-none border-none"
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
