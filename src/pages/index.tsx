import { Geist, Geist_Mono, Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import CarouselContainer from "@/components/carouselContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  weight: ["900"], // for WAN 2.2 heading
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  // 400 = body, 500 = button, 600 = subheading
});

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} ${montserrat.variable} ${inter.variable}`}>
      <Navbar />
      <CarouselContainer />
    </div>
  );
}
