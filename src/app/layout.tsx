import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voiding - Clinical Bladder Diary",
  description: "Professional bladder diary app for tracking voiding patterns, hydration, and bowel movements. Designed for patients and healthcare providers.",
  keywords: ["voiding", "bladder diary", "hydration tracking", "clinical", "urology", "health"],
  authors: [{ name: "Voiding App" }],
  openGraph: {
    title: "Voiding - Clinical Bladder Diary",
    description: "Professional bladder diary app for tracking voiding patterns, hydration, and bowel movements.",
    url: "https://voiding.app",
    siteName: "Voiding",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
