"use client";

import { useState } from "react";
import { quizQuestions } from "./question";
import QuizHeader from "./component/QuizHeader";
import QuizFooter from "./component/QuizFooter";
import QuestionRenderer from "./component/QuizRender";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});

  const question = quizQuestions[current];

  const handleNext = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent((p) => p + 1);
    } else {
      console.log("FINAL ANSWERS →", answers);
    }
  };

  const handleBack = () => {
    if (current > 0) setCurrent((p) => p - 1);
  };

  const updateAnswer = (key: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="min-h-screen bg-[#FFEDF5] flex justify-center">
      <section className="relative w-full max-w-[375px] min-h-screen px-[20px] pt-[85px] pb-[120px]">
        <QuizHeader onBack={handleBack} />

        <QuestionRenderer
          question={question}
          value={answers[question.key]}
          onChange={updateAnswer}
        />

        <QuizFooter
          onNext={handleNext}
          disabled={
            !question.skippable &&
            question.key &&
            !answers[question.key]
          }
        />
      </section>
    </main>
  );
}
