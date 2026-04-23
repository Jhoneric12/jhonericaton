"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { timelineData } from "@/data/projects";
import { motion } from "framer-motion";

const typeColors = {
  education: "bg-blue-400/10 text-blue-400 border-blue-400/30",
  work: "bg-accent-color/20 text-accent-color border-accent-color/40",
};

const typeLabels = {
  education: "Education",
  work: "Experience",
};

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 md:px-10 lg:px-48 py-10">
      <SectionTitle title={"My "} subTitle={"Experience"} />

      <div className="relative mt-14">
        {/* Vertical line — hidden on mobile, shown on lg */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent-color/60 via-accent-color/20 to-transparent lg:block" />

        <div className="flex flex-col gap-10">
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className={`relative flex flex-col lg:flex-row lg:items-center lg:gap-0 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -44 : 44 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Card */}
                <div className={`w-full lg:w-[calc(50%-2.5rem)] ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
                  <div className="group rounded-2xl border border-main-color/10 bg-white/40 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent-color/30 hover:shadow-md dark:border-title-color/10 dark:bg-white/5 dark:hover:border-accent-color/30">
                    {/* Type badge + year */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeColors[item.type]}`}
                      >
                        {typeLabels[item.type]}
                      </span>
                      <span className="text-xs text-sub-title-color">{item.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-main-color dark:text-title-color font-bold lg:text-lg leading-snug">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-1 text-xs text-accent-color font-medium">{item.subtitle}</p>

                    {/* Accent divider */}
                    <div className="my-3 w-8 h-0.5 bg-accent-color/50 rounded-full" />

                    {/* Description */}
                    <p className="text-sub-title-color dark:text-text-color leading-7 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Center dot — desktop only */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent-color bg-white shadow-md dark:bg-main-color">
                    <Icon className="text-accent-color text-base" />
                  </div>
                </div>

                {/* Empty spacer for the other side */}
                <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
