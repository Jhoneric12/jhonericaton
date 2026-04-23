import Image from "next/image";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Email from "@/components/Email";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import MyName from "@/components/MyName";
import AboutMe from "@/components/AboutMe";
import Stack from "@/components/Stack";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="portfolio-bg min-h-screen transition-colors duration-300 selection:bg-accent-color selection:text-white antialiased scroll-smooth tracking-wide">
      <Navbar />
      <div className="z-0">
        <Hero />
        {/* <Stack /> */}
        <Socials />
        <Email />
        <Works />
        <Timeline />
        <AboutMe />
        <Footer />
        <MyName />
      </div>
    </main>
  );
}
