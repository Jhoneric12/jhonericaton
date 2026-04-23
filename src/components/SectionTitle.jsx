"use client";
import React from "react";
import CurlyBracket from "../assets/curly-brackets.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

export default function SectionTitle({ title, subTitle }) {
  return (
    <motion.div
      className="flex items-center gap-1 font-bold text-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <Image src={CurlyBracket} width={20} height={10} className="w-auto h-auto" alt="CurlyBrace" />
      <h1 className="text-main-color dark:text-title-color lg:text-xl">
        <span>{title}</span>
        <span className="text-accent-color">{subTitle}</span>
      </h1>
    </motion.div>
  );
}
