import type { Metadata } from "next";
import { Rubik, Dancing_Script } from "next/font/google";
import "./globals.css";

const font = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Sinista | Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.variable} ${dancingScript.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
