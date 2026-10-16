// =============================================================================
// SITE CONFIGURATION & CONTENT SETTINGS
// =============================================================================

/**
 * The recipient's exact name.
 * Rule: Store the name in one configuration constant RECIPIENT_NAME = "ADHYA".
 * Never add nicknames, beauty-related adjectives, or descriptive titles.
 */
export const RECIPIENT_NAME = "ADHYA";

/**
 * Optional WhatsApp contact phone number.
 * Format: International country code + phone number without '+' or spaces.
 * Example for India: "919876543210"
 * Leave as "" if you prefer to coordinate in person or via other apps.
 */
export const WHATSAPP_PHONE_NUMBER = "";

/**
 * Pre-filled message sent when recipient clicks "LET'S PICK A DAY 📅".
 */
export const WHATSAPP_PREFILLED_MESSAGE =
  "Hey! It's a yes to coffee ☕ Let's figure out a day that works for both of us.";

/**
 * Quiz questions definition with specific options and humorous reaction text.
 */
export interface QuizOption {
  id: string;
  text: string;
  emoji: string;
  reaction: string;
  tag: string; // Used for deterministic result profiling
}

export interface QuizQuestion {
  id: number;
  category: string;
  subtitle: string;
  title: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: "Beverage Debate",
    subtitle: "First things first. Extremely important question. ☕",
    title: "What is your beverage personality?",
    options: [
      {
        id: "q1_coffee",
        text: "Coffee, obviously",
        emoji: "☕",
        reaction: "A person of culture, I see. ☕",
        tag: "coffee",
      },
      {
        id: "q1_chai",
        text: "Chai supremacy",
        emoji: "🫖",
        reaction: "Okay, we have a serious beverage debate here. 😂",
        tag: "chai",
      },
      {
        id: "q1_cold_coffee",
        text: "Cold coffee all day",
        emoji: "🧋",
        reaction: "The plot is getting interesting. 🧋",
        tag: "cold_coffee",
      },
      {
        id: "q1_depends",
        text: "Depends on the mood",
        emoji: "🤷‍♀️",
        reaction: "Diplomatic answer. Very suspicious. 👀",
        tag: "depends",
      },
    ],
  },
  {
    id: 2,
    category: "The Ideal Evening",
    subtitle: "Setting the scene...",
    title: "Your ideal free evening would be...",
    options: [
      {
        id: "q2_deep_convos",
        text: "Deep conversations at 2 AM",
        emoji: "🌙",
        reaction: "Night owl philosophy club? Elite taste. ✨",
        tag: "deep_talks",
      },
      {
        id: "q2_spontaneous",
        text: "Random spontaneous plans",
        emoji: "✨",
        reaction: "Spontaneity is the secret ingredient to great stories! 🚀",
        tag: "spontaneous",
      },
      {
        id: "q2_food_movie",
        text: "Food and a good movie",
        emoji: "🍿",
        reaction: "Comfort level: maximum. Solid choice! 🍕",
        tag: "comfort",
      },
      {
        id: "q2_staying_in",
        text: "Staying in and doing absolutely nothing",
        emoji: "🛋️",
        reaction: "The art of non-doing. A true connoisseur of peace. 😴",
        tag: "chill",
      },
    ],
  },
  {
    id: 3,
    category: "The Personality Check",
    subtitle: "No filter allowed.",
    title: "Be honest. What's your default setting?",
    options: [
      {
        id: "q3_chaotic",
        text: "Sweet but slightly chaotic",
        emoji: "😇",
        reaction: "The best combination honestly. Never a dull moment! 🌪️",
        tag: "chaotic",
      },
      {
        id: "q3_sarcasm",
        text: "Sarcasm is my second language",
        emoji: "😂",
        reaction: "Fluent in banter! Challenge accepted. 😏",
        tag: "sarcasm",
      },
      {
        id: "q3_quiet",
        text: "Quiet until I get comfortable",
        emoji: "🌷",
        reaction: "The quiet ones always have the most interesting minds. 🤫",
        tag: "introvert",
      },
      {
        id: "q3_plot_twist",
        text: "I AM the plot twist",
        emoji: "💅",
        reaction: "Director's cut vibes! Main character energy confirmed. 🎬",
        tag: "main_character",
      },
    ],
  },
  {
    id: 4,
    category: "The Hypothetical Scenario",
    subtitle: "Just a totally random theoretical thought...",
    title:
      "Imagine we went out for coffee sometime. What do you think would happen? 👀",
    options: [
      {
        id: "q4_hours",
        text: "We'd talk for hours",
        emoji: "☕",
        reaction: "Time travel through conversation? Sign me up. ⏳",
        tag: "talker",
      },
      {
        id: "q4_roast",
        text: "We'd roast each other",
        emoji: "😂",
        reaction: "Friendly fire enabled. Hope you're ready! 🔥",
        tag: "roaster",
      },
      {
        id: "q4_three_coffees",
        text: "One coffee would turn into three",
        emoji: "🍰",
        reaction: "A legitimate caffeine marathon. High stakes! ☕",
        tag: "caffeine_junkie",
      },
      {
        id: "q4_awkward",
        text: "We'd both be awkward for the first five minutes",
        emoji: "🫣",
        reaction: "Five minutes of awkwardness, then legendary stories! 🫶",
        tag: "awkward_cute",
      },
    ],
  },
];

/**
 * Vibe Result Profile structure
 */
export interface VibeResult {
  code: "A" | "B" | "C" | "D" | "E";
  badge: string;
  title: string;
  headline: string;
  description: string;
  personalizedHighlight: string;
  stats: {
    label: string;
    value: string;
    emoji: string;
  }[];
}

/**
 * Deterministic rule-based evaluation of quiz answers.
 */
export function calculateQuizResult(
  answers: Record<number, QuizOption | undefined>
): VibeResult {
  const q1 = answers[1];
  const q2 = answers[2];
  const q3 = answers[3];
  const q4 = answers[4];

  // Rule D: Sarcasm + Roasting / Menace
  if (
    q3?.tag === "sarcasm" ||
    q4?.tag === "roaster" ||
    (q1?.tag === "chai" && q3?.tag === "chaotic")
  ) {
    return {
      code: "D",
      badge: "Result: Certified Menace 💥",
      title: "Certified Menace",
      headline:
        "Your vibe: Certified menace. Coffee shops should be warned. 😂",
      description:
        "Banter score off the charts, zero hesitation to drop witty remarks, and enough energy to turn any peaceful cafe into an arena of laughs.",
      personalizedHighlight: `Specialty: Combining ${q1?.text || "caffeine"} with top-tier sarcasm and ${q2?.text || "unpredictable plans"}.`,
      stats: [
        { label: "Banter Potential", value: "99%", emoji: "🔥" },
        { label: "Chaos Factor", value: "92%", emoji: "🌪️" },
        { label: "Cafe Safety Level", value: "Medium Risk", emoji: "⚠️" },
      ],
    };
  }

  // Rule B: Main Character / Plot Twist
  if (
    q3?.tag === "main_character" ||
    q2?.tag === "spontaneous" ||
    q4?.tag === "three_coffees"
  ) {
    return {
      code: "B",
      badge: "Result: Main Character Energy ✨",
      title: "Main Character Energy",
      headline: "Your vibe: Main-character energy with a side of chaos. ✨",
      description:
        "Every coffee cup is a cinematic prop, spontaneous adventures are practically a requirement, and things are guaranteed to be anything but boring.",
      personalizedHighlight: `Signature move: Ordering ${q1?.text || "the drink"} with total confidence, followed by "${q4?.text || "making it memorable"}".`,
      stats: [
        { label: "Screen Presence", value: "100%", emoji: "🎬" },
        { label: "Spontaneity Index", value: "95%", emoji: "🚀" },
        { label: "Plot Twist Likelihood", value: "Maximum", emoji: "💅" },
      ],
    };
  }

  // Rule C: Quiet at first / Deep talks
  if (q3?.tag === "introvert" || q2?.tag === "deep_talks") {
    return {
      code: "C",
      badge: "Result: The Soulful Thinker 🌙",
      title: "Soulful & Witty",
      headline:
        "Your vibe: Quiet at first, legendary conversations later. 🌙",
      description:
        "Reserved on the surface, but once comfortable, you unlock the deepest, funniest, and most memorable conversations known to humanity.",
      personalizedHighlight: `Ideal setting: ${q2?.text || "Late night chats"}, sipping ${q1?.text || "good coffee"}, where ${q4?.text || "talking for hours"} feels natural.`,
      stats: [
        { label: "Conversation Depth", value: "10/10", emoji: "🧠" },
        { label: "Comfort Aura", value: "98%", emoji: "✨" },
        { label: "Post-Awkwardness Magic", value: "100%", emoji: "🌷" },
      ],
    };
  }

  // Rule A: Coffee + Talking for hours
  if (q1?.tag === "coffee" && (q4?.tag === "talker" || q2?.tag === "deep_talks")) {
    return {
      code: "A",
      badge: "Result: Elite Yapper ☕",
      title: "Elite Coffee Conversationalist",
      headline:
        "Official vibe report: Professional yapper with elite coffee-conversation potential. ☕😂",
      description:
        "A connoisseur of great brews and effortless dialogue. You could turn a quick 15-minute coffee stop into a 3-hour philosophical debate without noticing.",
      personalizedHighlight: `Formula: ${q1.text} + ${q2?.text || "great vibes"} = hours of effortless fun.`,
      stats: [
        { label: "Caffeine Compatibility", value: "99%", emoji: "☕" },
        { label: "Yap Potential", value: "Infinite", emoji: "🗣️" },
        { label: "Awkwardness Duration", value: "0 mins", emoji: "⚡" },
      ],
    };
  }

  // Rule E: Default / Unpredictable mixture
  return {
    code: "E",
    badge: "Result: Unpredictable Blend 🧋",
    title: "The Unpredictable Blend",
    headline:
      "Final report: An unpredictable combination of caffeine, conversation, and questionable decisions. 🧋",
    description:
      "You cannot be categorized into a standard box. You are a delightful wild card that keeps everyone on their toes in the best possible way.",
    personalizedHighlight: `Vibe balance: ${q1?.text || "Good drink"} + ${q3?.text || "a spark of fun"} + ${q4?.text || "great company"}.`,
    stats: [
      { label: "Uniqueness", value: "100%", emoji: "✨" },
      { label: "Caffeine Chemistry", value: "94%", emoji: "☕" },
      { label: "Memorable Factor", value: "Off the charts", emoji: "📈" },
    ],
  };
}
