import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import StoreWrapper from "./Provider/StoreWrapper";
import { Suspense } from "react";



const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeStore",
  description: "Welcome to our premier online watch boutique, where every tick marks a moment of timeless elegance. Discover an extensive selection of meticulously curated watches designed to elevate your style and punctuate your presence. From classic designs to contemporary marvels, our collection boasts a diverse range of timepieces to suit every taste and occasion.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <StoreWrapper>
            <Navbar />
            {children}
            <Footer />
          </StoreWrapper>
        </Suspense>
      </body>
    </html>
  );
}
