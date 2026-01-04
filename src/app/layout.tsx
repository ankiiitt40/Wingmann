import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "WingMann",
  description: "Stop Swiping, Start Meeting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
