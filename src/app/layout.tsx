import "@/styles/globals.css";
import "react-multi-carousel/lib/styles.css"
import { type Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "MGS | Tailored Blockchain Solutions",
  description: "Shape the future: Bespoke blockchain tech at your fingertips.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const funnel = Funnel_Display({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={funnel.className}>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
