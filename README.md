# ☕ ADHYA — An Interactive Coffee Date Invitation

A mobile-first, interactive web application crafted as a playful mini-game that culminates in a sweet, pressure-free coffee invitation.

---

## ✨ Features

- **Personalized Flow**: Exclusively addressed to `ADHYA` via a single configuration constant.
- **Stage 1 (Mysterious Introduction)**: Warm coffee illustration with steam animation, inviting curiosity without giving away the surprise.
- **Stage 2 (The Quiz Introduction)**: Playful warning about a "100% unnecessary scientific personality test."
- **Stage 3 (4-Question Personality Quiz)**:
  - Q1: *The Beverage Debate* (Coffee, Chai supremacy, Cold coffee, Depends)
  - Q2: *The Ideal Evening* (Deep talks at 2 AM, Spontaneous plans, Food & movie, Doing nothing)
  - Q3: *The Personality Check* (Sweet & chaotic, Fluent in sarcasm, Quiet until comfortable, Plot twist)
  - Q4: *The Hypothetical Scenario* (Talk for hours, Roast each other, Caffeine marathon, Awkward 5 mins)
  - Dynamic live reaction toasts specific to each selected option.
  - Full backward navigation with preserved answers, keyboard accessibility (keys 1–4, Enter), and skip option.
- **Stage 4 (Deterministic Quiz Results)**:
  - Generates custom vibe reports (e.g. *Certified Menace*, *Main Character Energy*, *Elite Coffee Conversationalist*, *Soulful & Witty*, or *Unpredictable Blend*) matching her selections.
  - Illustrated stats cards (Caffeine Compatibility, Banter Potential, Chaos Factor).
- **Stage 5 (The Grand Reveal)**:
  - Deliberate pause, animated latte art coffee cup.
  - Two functional, respectful choices:
    - `YES, LET'S BREW SOME MEMORIES ☕` (Primary)
    - `I'M COMMITTED 💌` (Secondary, respectful & functional)
- **Stage 6A (Celebration / Acceptance)**:
  - Multi-stage confetti celebration (`canvas-confetti`).
  - Warm celebratory heading.
  - Optional WhatsApp coordination button (`LET'S PICK A DAY 📅`) pre-filling a friendly message. Gracefully falls back if no phone number is configured.
  - Optional sound chime toggle (kept muted by default, zero external audio dependencies using Web Audio API).
- **Stage 6B (Respectful Decline)**:
  - Warm, graceful, completely zero-awkwardness response.
  - Blessing for great coffee and good days.
  - Button to return to the coffeeverse.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Celebration**: Canvas Confetti
- **Audio**: Native Web Audio API synthesizer chime (no external audio files to fail)

---

## ⚙️ Configuration

All user settings are located in [`src/config/site.ts`](src/config/site.ts):

### 1. Recipient's Name
```typescript
export const RECIPIENT_NAME = "ADHYA";
```

### 2. WhatsApp Phone Number (Optional)
To enable the **"LET'S PICK A DAY 📅"** button on the celebration screen:
```typescript
// International format without '+', spaces, or hyphens (e.g., country code + number)
export const WHATSAPP_PHONE_NUMBER = "919876543210";
```
*If left as `""`, the site displays a friendly fallback message without a broken button.*

### 3. Pre-filled WhatsApp Message
```typescript
export const WHATSAPP_PREFILLED_MESSAGE =
  "Hey! It's a yes to coffee ☕ Let's figure out a day that works for both of us.";
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

To test on your mobile phone on the same Wi-Fi network, visit the network URL displayed in the terminal (e.g., `http://192.168.X.X:3000`).

---

## 🌐 Public Deployment (Vercel)

Deploying to Vercel takes 2 minutes and provides a free, secure `https://` link:

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com/new) and create a new repository (e.g., `coffee-for-adhya`). You can make it **Public** or **Private**.
2. Run these commands in your project folder:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/coffee-for-adhya.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign up / log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select your `coffee-for-adhya` repository and click **Import**.
4. Leave all default settings (Next.js is automatically detected).
5. Click **Deploy**.
6. Within ~60 seconds, Vercel will give you a live production URL (e.g., `https://coffee-for-adhya.vercel.app`).

### Step 3: Verify on Mobile
- Open the live link in an incognito/private tab on your computer.
- Open the live link on your phone (using cellular data to simulate a recipient's connection).
- Send the final link to **ADHYA**! ☕💌
