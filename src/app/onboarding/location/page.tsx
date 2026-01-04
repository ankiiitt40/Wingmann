"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function LocationPage() {
  const router = useRouter();
  const [location, setLocation] = useState("Fetching location…");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("Bhopal, India");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const isFetched = location !== "Fetching location…";

  return (
    <main className="min-h-screen bg-[#FFEDF5] flex justify-center">
      <section className="relative w-full max-w-[375px] min-h-screen px-[15px] pt-[125px] flex flex-col items-center">


       <button
  onClick={() => router.back()}
  className="absolute top-[24px] left-[15px] outline-none border-none focus:outline-none active:outline-none active:bg-transparent"
>
  <ChevronLeft size={24} />
</button>

        <div className="w-full">
          <h1 className="text-[26px] font-semibold text-black">
            Where do you currently live?
          </h1>

          <p className="mt-2 text-[15px] text-black/60 leading-snug">
            I’ll try to show matches in the same city.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-3">


          <div
            className="flex items-center justify-center"
            style={{ width: "45.75px", height: "60px" }}
          >
            <Image
              src="/location-icon1.png"
              alt="Location"
              width={46}
              height={60}
              priority
            />
          </div>


          <div
            className="text-[15px] text-black/70 text-center transition"
            style={{ width: "135px", height: "22px", lineHeight: "22px" }}
          >
            {location}
          </div>

        </div>

     
        {isFetched && (
             <div className="flex-1 flex items-end justify-center pb-8">
                    <button
                      onClick={() => router.push("/onboarding/city")}
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
          
        )}

      </section>
    </main>
  );
}
