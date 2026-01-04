"use client";

import { useState } from "react";

export default function QuestionRenderer({ question, value, onChange }) {
  const [showPicker, setShowPicker] = useState(false);

  if (!question) return null;

  return (
    <div className="mt-[36px]">

      {/* TITLE */}
      <h1 className="text-[26px] font-semibold text-black leading-[34px]">
        {question.title}
      </h1>

      {/* SUBTITLE */}
      {question.subtitle && (
        <p className="mt-[10px] text-[16px] text-black/60 leading-[24px]">
          {question.subtitle}
        </p>
      )}

      {/* ================= INPUT ================= */}
      {question.type === "input" && (
        <input
          value={value || ""}
          onChange={(e) => onChange(question.key, e.target.value)}
          placeholder={question.placeholder}
          className="mt-[28px] w-full h-[56px] rounded-[18px] border-2 border-[#5B3765] px-[18px] text-[16px] outline-none"
        />
      )}

      {/* ================= TEXTAREA ================= */}
      {question.type === "textarea" && (
        <textarea
          rows={4}
          value={value || ""}
          onChange={(e) => onChange(question.key, e.target.value)}
          placeholder={question.placeholder}
          className="mt-[28px] w-full rounded-[18px] border-2 border-[#5B3765] px-[18px] py-[14px] text-[16px] outline-none resize-none"
        />
      )}

      {/* ================= OPTIONS ================= */}
      {question.type === "options" && (
        <div className="mt-[28px] flex flex-col gap-[14px]">
          {question.options.map((opt) => (
            <button
              key={opt}
              onClick={() => onChange(question.key, opt)}
              className={`h-[56px] rounded-[18px] border-2 text-[16px] font-medium ${
                value === opt
                  ? "bg-[#5B3765] text-white border-[#5B3765]"
                  : "border-[#5B3765] text-black"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* ================= GRID (EDUCATION) ================= */}
      {question.type === "grid" && (
        <div className="mt-[36px] grid grid-cols-2 gap-[18px]">
          {question.options.map((opt) => (
            <button
              key={opt}
              onClick={() => onChange(question.key, opt)}
              className={`h-[76px] rounded-[20px] border-2 text-[16px] font-medium flex items-center justify-center ${
                value === opt
                  ? "bg-[#5B3765] text-white border-[#5B3765]"
                  : "border-[#5B3765] bg-white text-black"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* ================= RELIGION PICKER ================= */}
      {question.type === "picker" && (
        <>
          {/* INPUT */}
          <div
            onClick={() => setShowPicker(true)}
            className="mt-[28px] h-[56px] rounded-[18px] border-2 border-[#5B3765] bg-white px-[18px] flex items-center text-[16px]"
          >
            {value || "What’s It"}
          </div>

         {showPicker && (
  <div className="fixed inset-0 z-50">

    <div
      className="absolute inset-0 bg-black/30"
      onClick={() => setShowPicker(false)}
    />

 
   <div className="fixed bottom-[88px] left-1/2 -translate-x-1/2 w-[335px] ro unded-[18px] overflow-hidden bg-white shadow-2xl">
      
      <div className="h-[44px] bg-[#5B3765] text-white flex items-center justify-center text-[15px]">
        Please select your religion
      </div>

      <div className="max-h-[160px] overflow-y-auto divide-y">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => {
              onChange(question.key, opt);
              setShowPicker(false);
            }}
            className={`w-full py-[14px] text-[16px] ${
              value === opt ? "font-semibold bg-[#F9EFFF]" : ""
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  </div>
)}

        </>
      )}

    
      {question.type === "lifestyle" && (
        <div className="mt-[32px] flex flex-col gap-[22px]">

          {[
            { label: "Do You Drink?", key: "drink" },
            { label: "Do You Smoke?", key: "smoke" },
            { label: "Do You Exercise?", key: "exercise" },
          ].map(({ label, key }) => (
            <div
              key={key}
              className="bg-white border-2 border-[#5B3765] rounded-[22px] p-[18px]"
            >
              <p className="text-[18px] font-medium mb-[14px]">
                {label}
              </p>

              <div className="flex flex-wrap gap-[10px]">
                {["Regularly", "Occasionally", "Never"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() =>
                      onChange(question.key, {
                        ...(value || {}),
                        [key]: opt,
                      })
                    }
                    className={`px-[16px] py-[10px] rounded-full text-[14px] border-2 ${
                      value?.[key] === opt
                        ? "bg-[#5B3765] text-white border-[#5B3765]"
                        : "bg-white border-[#D8C2DF]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
