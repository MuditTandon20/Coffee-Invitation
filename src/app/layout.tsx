import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { RECIPIENT_NAME } from "@/config/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://coffee-invitation-three.vercel.app"
  ),
  title: "A Little Coffee Question ☕",
  description: `A tiny, playful personality test and a fun question for ${RECIPIENT_NAME}.`,
  authors: [{ name: "Your Secret Admirer" }],
  keywords: ["coffee", "invitation", "fun quiz", "mini game"],
  openGraph: {
    title: "A Little Coffee Question ☕",
    description: `A tiny, playful personality test and a fun question for ${RECIPIENT_NAME}...`,
    type: "website",
    locale: "en_US",
    siteName: "Coffee Date Invitation",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "A warm cup of coffee with a floating heart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Little Coffee Question ☕",
    description: `A tiny, playful personality test and a fun question for ${RECIPIENT_NAME}...`,
    images: ["/og-preview.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased selection:bg-[#E29578]/30 selection:text-[#2C1810]">
        {children}
      </body>
    </html>
  );
}
