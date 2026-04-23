"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { motion } from "framer-motion";
import { Projects } from "@/data/projects";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdWorkOutline } from "react-icons/md";
import { SiAppstore, SiGoogleplay, SiHuawei } from "react-icons/si";

export default function Works() {
  return (
    <section id="works" className="px-6 md:px-10 lg:px-48">
      <SectionTitle title={"Some of my "} subTitle={"Works"} />
      <div className="py-16 flex flex-col gap-20">
        {Projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className={`flex flex-col items-start justify-center gap-8 lg:gap-14 ${
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Project Image */}
            <Link
              href={
                project.deploymentLink || project.appStoreLink || project.playStoreLink || project.appGalleryLink || "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-[45%] flex-shrink-0 overflow-hidden rounded-xl border border-accent-color/20 shadow-md group"
            >
              <div className="relative w-full h-[14rem] md:h-[20rem] lg:h-[17rem] overflow-hidden">
                <Image
                  className="object-cover group-hover:scale-110 duration-700"
                  src={project.image}
                  alt={project.alt}
                />
              </div>
            </Link>

            {/* Project Content */}
            <div className="w-full lg:w-[55%] flex flex-col gap-3">
              {/* Role & Company */}
              <div className="flex flex-wrap items-center gap-2">
                {project.role && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-color border border-accent-color/50 bg-accent-color/10 px-3 py-1 rounded-full">
                    <MdWorkOutline className="text-sm" />
                    {project.role}
                  </span>
                )}
                {project.company && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-sub-title-color">
                    <HiBuildingOffice2 className="text-sm text-accent-color" />
                    Developed at{" "}
                    <span className="text-main-color dark:text-light-main-color font-medium ml-1">
                      {project.company}
                    </span>
                  </span>
                )}
              </div>

              {/* Project Name */}
              <h2 className="text-main-color dark:text-title-color font-bold lg:text-lg leading-snug">
                {project.projectName}
              </h2>

              {/* Accent divider */}
              <div className="w-10 h-0.5 bg-accent-color rounded-full" />

              {/* Description */}
              <p className="text-sub-title-color dark:text-text-color leading-7">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex gap-2 flex-wrap mt-1">
                {project.techStack.map((stack, index) => (
                  <span
                    key={index}
                    className="border border-accent-color/40 px-3 py-1 text-xs text-main-color dark:text-light-main-color hover:border-accent-color hover:bg-accent-color/10 transition-colors duration-200 rounded-sm cursor-default"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-3 pt-3 border-t border-accent-color/10 flex items-center gap-5">
                {project.type === "mobile" ? (
                  <>
                    {project.appStoreLink && (
                      <Link
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-main-color dark:text-light-main-color hover:text-accent-color dark:hover:text-accent-color transition-colors duration-300"
                      >
                        <SiAppstore className="text-xl" />
                        <span>App Store</span>
                      </Link>
                    )}
                    {project.playStoreLink && (
                      <Link
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-main-color dark:text-light-main-color hover:text-accent-color dark:hover:text-accent-color transition-colors duration-300"
                      >
                        <SiGoogleplay className="text-xl" />
                        <span>Play Store</span>
                      </Link>
                    )}
                    {project.appGalleryLink && (
                      <Link
                        href={project.appGalleryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-main-color dark:text-light-main-color hover:text-accent-color dark:hover:text-accent-color transition-colors duration-300"
                      >
                        <SiHuawei className="text-xl" />
                        <span>App Gallery</span>
                      </Link>
                    )}
                    {!project.appStoreLink && !project.playStoreLink && !project.appGalleryLink && (
                      <span className="text-xs text-sub-title-color italic">Store links coming soon</span>
                    )}
                  </>
                ) : (
                  <>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-main-color dark:text-light-main-color hover:text-accent-color dark:hover:text-accent-color transition-colors duration-300"
                    >
                      <LuGithub className="text-xl" />
                      <span>Source</span>
                    </Link>
                    <Link
                      href={project.deploymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-main-color dark:text-light-main-color hover:text-accent-color dark:hover:text-accent-color transition-colors duration-300"
                    >
                      <FiExternalLink className="text-xl" />
                      <span>Live Demo</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
