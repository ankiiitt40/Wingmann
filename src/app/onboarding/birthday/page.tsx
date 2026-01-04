"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Picker from "react-mobile-picker";

export default function BirthdayPage() {
  const router = useRouter();

  const [value, setValue] = useState({
    day: "09",
    month: "10",
    year: "2001",
  });

  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const years = Array.from({ length: 100 }, (_, i) => String(2024 - i));

  return (
    <main className="min-h-screen bg-[#FFEDF5] flex justify-center">
      <section className="min-h-screen w-full max-w-[375px] relative flex flex-col items-center">

     
        <button
  onClick={() => router.back()}
  className="absolute top-[24px] left-[15px] outline-none border-none focus:outline-none active:outline-none active:bg-transparent"
>
  <ChevronLeft size={24} />
</button>

  
        <div className="mt-[125px] w-[327px] h-[218px]">
          <h1 className="text-[26px] font-semibold text-black">
            When’s your birthday?
          </h1>

          <p className="mt-2 text-[15px] text-black/60">
            I like sending good vibes to people on their special day
          </p>

     
          <div className="mt-6 flex gap-3 justify-between  ">
            {[
              { label: "Day", value: value.day, w: "72px" },
              { label: "Month", value: value.month, w: "72px" },
              { label: "Year", value: value.year, w: "136px" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <span className="text-[13px] text-black/60">
                  {item.label}
                </span>
                <div
                  className="h-[56px] rounded-[18px] border-2 border-[#5B3765] bg-white flex items-center justify-center text-[16px] font-medium"
                  style={{ width: item.w }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="mt-6 w-[335px] h-[197px] bg-white rounded-[18px] overflow-hidden">
          <div className="h-[44px] bg-[#5B3765] text-white text-center flex items-center justify-center text-[15px]">
            Please select date
          </div>

          <div className="h-[153px] flex items-center justify-center">
            <Picker
              value={value}
              onChange={setValue}
              wheelMode="natural"
              className="birthday-picker"
            >
              <Picker.Column name="day">
                {days.map((d) => (
                  <Picker.Item key={d} value={d}>
                    {d}
                  </Picker.Item>
                ))}
              </Picker.Column>

              <Picker.Column name="month">
                {months.map((m) => (
                  <Picker.Item key={m} value={m}>
                    {m}
                  </Picker.Item>
                ))}
              </Picker.Column>

              <Picker.Column name="year">
                {years.map((y) => (
                  <Picker.Item key={y} value={y}>
                    {y}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>

       <div className="flex-1 flex items-end justify-center pb-8">
  <button
    
    onClick={() => router.push("/onboarding/height")}
    className={`
      w-[80px] h-[78px]
      flex items-center justify-center
      transition
      appearance-none
      bg-transparent
      border-none
      outline-none
      focus:outline-none
      focus:ring-0
      active:outline-none
      active:ring-0
      active:bg-transparent
      [-webkit-tap-highlight-color:transparent]
     
    `}
  >
    <Image
      src="/btn-arrow.png"
      width={80}
      height={78}
      alt="Next"
      draggable={false}
    />
  </button>
</div>


      </section>
    </main>
  );
}
