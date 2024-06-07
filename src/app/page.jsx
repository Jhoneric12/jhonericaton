import Image from "next/image";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Email from "@/components/Email";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import MyName from "@/components/MyName";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className='bg-light-main-color dark:bg-main-color transition-colors duration-300 selection:bg-accent-color antialiased'>
      <Navbar/>
      <div className="z-10">
        <Hero/>
        <Socials/>
        <Email/>
        <Works/>
        <AboutMe/>
        <Footer/>
        <MyName/>
      </div>
    </main>
  );
}
