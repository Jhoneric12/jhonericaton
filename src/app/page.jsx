import Image from "next/image";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Email from "@/components/Email";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className='bg-light-main-color dark:bg-main-color transition-colors duration-300 selection:bg-accent-color antialiased'>
      <Navbar/>
      <Hero/>
      <Socials/>
      <Email/>
    </main>
  );
}
