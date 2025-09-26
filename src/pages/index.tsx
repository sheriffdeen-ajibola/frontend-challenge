import { Geist, Geist_Mono, Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import CarouselContainer from "@/components/carouselContainer";
import React from "react";

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
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Home: React.FC = () => {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} ${montserrat.variable} ${inter.variable}`}>
      <Navbar />
      <CarouselContainer />
    </div>
  );
};

export default Home;
