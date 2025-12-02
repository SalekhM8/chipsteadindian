import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fraunces (Variable) -> Tuned to match Cheltenham BT
// "Soft" and "Wonk" axes give it that friendly, chunky 1920s/30s serif look.
const cheltenham = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-cheltenham-bt",
  display: "swap",
});

// Montserrat -> Tuned to match Gill Sans Nova
// We use it because it's a geometric-humanist hybrid that can mimic Gill's "English" feel at small sizes/bold weights.
const gillSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-gill-sans-nova",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chipstead Tandoori | Authentic Indian Cuisine",
  description: "Experience the finest Indian cuisine at Chipstead Tandoori. A culinary journey through authentic flavors and traditions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cheltenham.variable} ${gillSans.variable} antialiased bg-chipstead-cream text-chipstead-black selection:bg-chipstead-red selection:text-white`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
