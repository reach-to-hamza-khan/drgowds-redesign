import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Gowd's Dental Hospital | Rebuild Your Smile",
  description: "Experience 55+ years of clinical excellence at Dr. Gowd's Dental Hospitals in Hyderabad. Book your free appointment today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
