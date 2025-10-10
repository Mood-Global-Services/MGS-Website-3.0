import "@/styles/globals.css";

import { type Metadata } from "next";
import { Funnel_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "MGS | Tailored Blockchain Solutions",
  description: "Shape the future: Bespoke blockchain tech at your fingertips.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const funnel = Funnel_Display({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={funnel.className}>{children}</body>
    </html>
  );
}
