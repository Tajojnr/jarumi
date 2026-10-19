import type { Metadata } from "next";
import { Inter, Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jarumi Enterprises Nigeria Limited | Jibia, Katsina State",
  description: "Premier distributor of commercial Keke Napep, motorcycles, motor vehicles, genuine auto parts, and high-tensile construction iron rods in Katsina State.",
  keywords: ["Jarumi Enterprises", "Keke Napep", "Motorcycles", "Automotive", "Hardware", "Katsina", "Nigeria"],
  authors: [{ name: "Jarumi Enterprises Nigeria Limited" }],
  openGraph: {
    title: "Jarumi Enterprises Nigeria Limited",
    description: "Katsina State's premier distributor of commercial vehicles and construction hardware.",
    url: "https://jarumi.vercel.app",
    siteName: "Jarumi Enterprises Nigeria Limited",
    images: [{ url: "/images/brand/banner.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarumi Enterprises Nigeria Limited",
    description: "Premier automotive and hardware supply company in Jibia, Katsina State.",
    images: ["/images/brand/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <meta name="theme-color" content="#060B11" />
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" type="image/png" href="/images/brand/logo.png" />
        <title>{metadata.title as string}</title>
      </head>
      <body
        className={`${cinzel.variable} ${plusJakartaSans.variable} font-sans bg-[#060B11] text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}