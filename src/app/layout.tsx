import "../app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import type React from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evera Global",
  description: "Professional business consulting services for modern enterprises",
  icons: {
    icon: "/logo-evera.png", // Add this line.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
