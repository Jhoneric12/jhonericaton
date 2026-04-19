import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Link from "next/link";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

const CONTACT_EMAIL = "Email: jhonericaton@gmail.com";
const CONTACT_NUMBER = "Phone Number: +63 968 326 8687";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-4 md:px-10 lg:px-48">
      <SectionTitle title={"Let's "} subTitle={"Connect"} />
      <div className="flex flex-col items-center justify-center gap-4 text-center py-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-28 h-15 text-main-color dark:text-title-color font-regular"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <h1 className="text-main-color dark:text-title-color font-bold text-2xl lg:text-3xl">Get in Touch</h1>
        <p className="text-main-color dark:text-title-color leading-7 md:w-[60%] lg:text-base">
          Got a <span className="text-accent-color font-medium">project idea</span> or a{" "}
          <span className="text-accent-color font-medium">question</span>? Let's bring your vision to life! I'm
          available for
          <span className="text-accent-color font-medium"> freelance</span> opportunities and eager to collaborate.
          Reach out and let's create something amazing together!
        </p>

        <div className="flex flex-col items-center gap-2 text-sm md:text-base">
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-main-color dark:text-title-color hover:text-accent-color dark:hover:text-accent-color transition"
          >
            {CONTACT_EMAIL}
          </Link>
          <Link
            href={`tel:${CONTACT_NUMBER.replace(/\s+/g, "")}`}
            className="text-main-color dark:text-title-color hover:text-accent-color dark:hover:text-accent-color transition"
          >
            {CONTACT_NUMBER}
          </Link>
        </div>

        <div className="flex items-center gap-5 pt-1">
          <Link href={"https://www.linkedin.com/in/jhon-eric-aton-5535a8245/"} target="_blank">
            <ImLinkedin2 className="text-main-color dark:text-title-color text-xl hover:text-accent-color hover:translate-y-[-3px] dark:hover:text-accent-color transition duration-200" />
          </Link>
          <Link href={"https://www.facebook.com/jhoneric.aton/"} target="_blank">
            <FaFacebookF className="text-main-color dark:text-title-color text-xl hover:text-accent-color hover:translate-y-[-3px] dark:hover:text-accent-color transition duration-200" />
          </Link>
          <Link href={"https://github.com/Jhoneric12"} target="_blank">
            <LuGithub className="text-main-color dark:text-title-color text-xl hover:text-accent-color hover:translate-y-[-3px] dark:hover:text-accent-color transition duration-200" />
          </Link>
        </div>

        <Link href={`mailto:${CONTACT_EMAIL}`}>
          <Button btnText={"Send Message"} />
        </Link>
      </div>
    </footer>
  );
}
