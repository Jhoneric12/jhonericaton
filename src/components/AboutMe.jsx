"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Technologies } from "@/data/tech";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, stagger } from "@/utils/animations";

export default function AboutMe() {
  const quickStats = [
    { id: 1, value: "2+", label: "Years Building and Learning" },
    { id: 2, value: "4+", label: "Projects Delivered" },
    { id: 3, value: "6+", label: "Core Tech Stacks" },
  ];

  return (
    <section id="about-me" className="px-6 md:px-10 lg:px-48 py-10">
      <SectionTitle title={"About "} subTitle={"Me"} />
      <div className="grid w-full gap-14 py-12 lg:gap-16 xl:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="flex flex-col items-start gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h1 variants={fadeUp} className="text-main-color dark:text-title-color text-2xl font-bold md:text-3xl">
            Hi there!
          </motion.h1>
          <motion.p variants={fadeUp} className="text-main-color dark:text-title-color leading-7 md:leading-8">
            I am <span className="text-accent-color font-medium">Jhon Eric Aton</span>, a passionate coder hailing from
            Antipolo, Rizal. I graduated at the{" "}
            <span className="text-accent-color font-medium">University of Rizal System</span>, with a{" "}
            <span className="text-accent-color font-medium">Bachelor of Science in Information Technology</span>.
          </motion.p>
          <motion.p variants={fadeUp} className="text-main-color dark:text-title-color leading-7 md:leading-8">
            My coding adventure began in 2021, sparked by a fascination with crafting websites and exploring the vast
            world of programming languages. Since then, my journey has been driven by a desire to not just code, but to
            create.
          </motion.p>
          <motion.p variants={fadeUp} className="text-main-color dark:text-title-color leading-7 md:leading-8">
            This portfolio showcases the projects I've poured my heart and skills into, each one a stepping stone on my
            path to becoming a skilled developer. Dive in and explore the applications, websites, or innovative
            solutions I've built – a testament to my dedication and ever-evolving skillset.
          </motion.p>

          <motion.p variants={fadeUp} className="text-main-color/90 dark:text-title-color/90 leading-7 md:leading-8">
            I enjoy transforming ideas into practical digital products by blending thoughtful UI, clean backend logic,
            and scalable architecture. My focus is on building software that is fast, reliable, and genuinely useful for
            the people who use it.
          </motion.p>

          <motion.div variants={fadeUp} className="grid w-full gap-3 pt-2 sm:grid-cols-3">
            {quickStats.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border duration-300 transition-all hover:border-accent-color/30 hover:shadow-md dark:hover:border-accent-color/30 border-main-color/15 bg-white/40 p-4 backdrop-blur-sm dark:border-title-color/20 dark:bg-white/5"
              >
                <h2 className="text-accent-color text-xl font-bold md:text-2xl">{item.value}</h2>
                <p className="text-main-color dark:text-title-color text-sm leading-6">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-2">
            <Link target="_blank" rel="noopener noreferrer" href={"/JHON_ERIC_ATON.pdf"}>
              <Button btnText={"Download CV"} />
            </Link>
            <Link href={"#works"}>
              <Button btnText={"See My Work"} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeRight}
        >
          <div className="rounded-2xl border duration-300 transition-all hover:border-accent-color/30 hover:shadow-md dark:hover:border-accent-color/30 border-main-color/15 bg-white/45 p-6 shadow-sm backdrop-blur-sm dark:border-title-color/20 dark:bg-white/5">
            <h1 className="text-main-color dark:text-title-color text-lg font-bold md:text-xl">
              <span className="text-accent-color">What I focus</span> on today
            </h1>
            <p className="text-main-color dark:text-title-color mt-3 text-sm leading-7 md:text-base">
              Building responsive interfaces, developing API-driven systems, and continuously improving performance,
              accessibility, and maintainability across every project I ship.
            </p>
          </div>

          <div>
            <h1 className="text-main-color dark:text-title-color text-lg font-bold">
              <span className="text-accent-color">Technologies</span> I leverage
            </h1>
            <div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-4">
              {Technologies.map((tech) => (
                <div
                  className="flex min-h-[96px] flex-col items-center transition-all duration-300 justify-center gap-2 rounded-xl border border-main-color/10  bg-white/35 p-3 text-center hover:border-accent-color/30 hover:shadow-md dark:hover:border-accent-color/30 dark:border-title-color/15 dark:bg-white/5"
                  key={tech.id}
                >
                  <Image src={tech.icon} alt={tech.alt} width={36} height={36} className="h-9 w-9 object-contain" />
                  <h2 className="text-main-color dark:text-title-color text-xs leading-5">{tech.lang}</h2>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
