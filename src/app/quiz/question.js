export const quizQuestions = [
  {
    key: "native_place",
    type: "input",
    title: "What’s your native place?",
    subtitle: "It’s good to know where’s someone story began.",
    placeholder: "Enter Location",
  },

  {
    key: "story",
    type: "textarea",
    title: "What’s your story?",
    subtitle: "Write about your journey in 50 words.",
    placeholder: "Tell us about yourself",
  },

  {
    key: "occupation",
    type: "options",
    title: "What do you do these days?",
    subtitle: "like working, studying, or chasing something creative?",
    options: ["I’m Working", "I’m Studying", "Figuring It Out"],
  },

  {
    key: "education",
    type: "grid",
    title: "And your education?",
    subtitle: "what’s the highest degree or field you studied in?",
    options: ["High School", "Undergraduate", "Postgraduate", "Doctorate"],
  },

{
  key: "religion",
  type: "picker",
  title: "Do you follow any particular religion?",
  subtitle: "You can totally skip it if you'd like.",
  skippable: true,
  options: ["Christian", "Hindu", "Muslim"],
}
,

  {
    key: "lifestyle",
    type: "lifestyle",
    title: "Let’s talk about lifestyle",
    subtitle: "You can answer honestly — we all have our quirks",
  },
];
