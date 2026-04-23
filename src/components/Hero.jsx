"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import Stack from "./Stack";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pb-20 pt-44 md:px-10 lg:px-16"
    >
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[14%] h-56 w-56 -translate-x-1/2 rounded-full bg-accent-color/15 blur-3xl" />
        <div className="absolute bottom-[16%] left-[18%] h-40 w-40 rounded-full bg-accent-color/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[12%] h-32 w-32 rounded-full bg-accent-color/10 blur-3xl" />
      </div> */}

      <motion.div
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-main-color/70 dark:text-title-color/70 md:text-sm"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-main-color dark:text-title-color text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {/* Build software that <span className="text-accent-color">grows</span> with you. */}
          {/* Powering growth through scalable <span className="text-accent-color">software</span>. */}
          <span className="text-accent-color">Software</span> that grows as you do.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-3xl text-base leading-relaxed text-main-color/90 dark:text-text-color md:text-lg md:leading-relaxed"
        >
          I develop end-to-end applications with a focus on performance, clean architecture, and usability.
        </motion.p>

        {/* <p className="mt-4 max-w-2xl text-sm leading-7 text-main-color/80 dark:text-text-color/90 md:text-base">
          I build responsive frontends, robust APIs, and maintainable systems focused on clean architecture,
          performance, and real-world usability.
        </p> */}

        {/* <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-medium md:text-sm">
          <span className="rounded-full border border-main-color/20 bg-white/45 px-3 py-1 text-main-color dark:border-title-color/25 dark:bg-white/5 dark:text-title-color">
            Next.js
          </span>
          <span className="rounded-full border border-main-color/20 bg-white/45 px-3 py-1 text-main-color dark:border-title-color/25 dark:bg-white/5 dark:text-title-color">
            React
          </span>
          <span className="rounded-full border border-main-color/20 bg-white/45 px-3 py-1 text-main-color dark:border-title-color/25 dark:bg-white/5 dark:text-title-color">
            Node.js
          </span>
          <span className="rounded-full border border-main-color/20 bg-white/45 px-3 py-1 text-main-color dark:border-title-color/25 dark:bg-white/5 dark:text-title-color">
            TypeScript
          </span>
        </div> */}

        <motion.div
          variants={fadeUp}
          className="mt-10 inline-flex items-center gap-3 rounded-full px-5 py-2 text-sm font-medium text-main-color md:text-base dark:text-title-color"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent-color shadow-[0_0_16px_rgba(75,216,213,0.8)] animate-pulse " />
          Available for new opportunities
        </motion.div>

        <motion.div variants={fadeUp} className="mt-3 flex flex-wrap items-center justify-center gap-6">
          <Link target="blank" href={"/JHON_ERIC_ATON.pdf"}>
            <Button btnText={"Download CV"} />
          </Link>

          <Link href={"#works"}>
            <Button btnText={"View Projects"} />
          </Link>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-20">
          <Stack />
        </motion.div>
      </motion.div>
    </section>
  );
}
