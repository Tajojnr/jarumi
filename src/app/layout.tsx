import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { COMPANY_INFO } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | Premium Vehicles & Structural Materials`,
  description: `${COMPANY_INFO.hausaTagline}. Official portal for Jarumi Enterprises Nigeria Limited. Authorized dealer of TVS & Bajaj Tricycles (Keke Napep), Commercial Motorcycles, Automobiles, Genuine Spare Components, and Structural Steel in Jibia, Katsina State.`,
  keywords: [
    "Jarumi Enterprises Nigeria Limited",
    "Keke Napep Katsina",
    "TVS Tricycles Nigeria",
    "Bajaj RE 4S Jibia",
    "Automobiles Katsina",
    "Structural Steel Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#060b11] text-[#f8f6f0] antialiased selection:bg-[#c59b27] selection:text-[#060b11]">
        {children}
      </body>
    </html>
  );
}