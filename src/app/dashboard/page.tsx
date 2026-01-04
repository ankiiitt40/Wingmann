"use client";
import { useRouter } from "next/navigation";


import { Bell, Menu, Heart, Calendar, User, Home } from "lucide-react";


export default function DashboardPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-white flex justify-center">
      <section className="w-full max-w-[375px] min-h-screen px-[20px] pt-[85px] pb-[120px] relative">


<div className="flex items-center justify-between h-[52px]">


  <div className="w-[251px]">
    <h1 className="text-[22px] font-semibold text-[#5B3765] leading-[28px]">
      Good Evening, Rajesh
    </h1>
    <p className="text-[15px] text-black/60 leading-[22px] mt-[2px]">
      Let’s find you a date!
    </p>
  </div>

  <div className="flex items-center justify-end gap-[18px] w-[68px]">
    <div className="relative flex items-center">
      <Bell size={22} className="text-[#5B3765]" />
      <span className="absolute -top-[1px] -right-[1px] w-[8px] h-[8px] bg-red-500 rounded-full" />
    </div>
    <Menu size={22} className="text-[#5B3765]" />
  </div>

</div>



        <h2 className="mt-[36px] text-[18px] font-semibold text-black">
          Your Dashboard
        </h2>


        <div className="mt-[16px] grid grid-cols-2 gap-[14px]">
          <div className="bg-[#F9EFFF] rounded-[20px] px-[20px] py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            <p className="text-[14px] text-black/70">Profile</p>
            <p className="mt-[6px] text-[28px] font-semibold text-[#5B3765]">
              50%
            </p>
          </div>

          <div className="bg-[#F9EFFF] rounded-[20px] px-[20px] py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            <p className="text-[14px] text-black/70">
              Compatibility Quiz
            </p>
            <p className="mt-[6px] text-[28px] font-semibold text-[#5B3765]">
              10%
            </p>
          </div>
        </div>


        <h2 className="mt-[36px] text-[18px] font-semibold text-black">
          Know Your Type
        </h2>

       <button
  onClick={() => router.push("/quiz")}
  className="mt-[16px] w-full h-[56px] bg-[#5B3765] rounded-[22px] text-white text-[16px] font-medium shadow-[0_8px_18px_rgba(91,55,101,0.45)] active:scale-95 transition"
>
  Take A Quiz
</button>

   
        <h2 className="mt-[42px] text-[18px] font-semibold text-black">
          Let’s Know About Us
        </h2>

        <div className="mt-[16px] bg-[#F9EFFF] rounded-[26px] px-[26px] py-[30px] shadow-[0_10px_22px_rgba(0,0,0,0.16)]">
          <h3 className="text-[28px] font-semibold text-center text-black">
            What?
          </h3>

          <p className="mt-[8px] text-[18px] font-medium text-center text-black">
            Making dating real again.
          </p>

          <p className="mt-[18px] text-[15px] text-black/70 text-center leading-[22px]">
            We help you skip the endless swipes and chats — and actually meet
            people who truly fit your vibe.
          </p>
        </div>

<div className="fixed bottom-[20px] left-1/2 -translate-x-1/2 
                w-[311px] h-[60px]
                bg-[#EAD6EF] rounded-[28px]
                px-[22px]
                flex justify-between items-center
                shadow-[0_10px_24px_rgba(0,0,0,0.2)]">

  <div className="flex items-center gap-[8px] bg-[#C68BD6] px-[18px] py-[10px] rounded-[20px] text-black">
    <Home size={20} />
    <span className="text-[15px] font-medium">Home</span>
  </div>

  <Heart size={22} className="text-black/70" />
  <Calendar size={22} className="text-black/70" />
  <User size={22} className="text-black/70" />
</div>


      </section>
    </main>
  );
}
