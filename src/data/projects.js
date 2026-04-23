import JC from "../assets/JCs.png";
import Hustle from "../assets/Hustle.png";
import WorldbexWeb from "../assets/Worldbex.png";
import WorldbexMobile from "../assets/Worldbex Mobile.png";
import { MdSchool, MdWork } from "react-icons/md";

const companyName = "Dynamic Global Soft Inc.";

export const Projects = [
  {
    id: 1,
    projectName: "Worldbex Services International Registration Portals",
    role: "Main Frontend Web Developer",
    company: companyName,
    description:
      "An Event Management System designed to streamline the end-to-end process of organizing and participating in events, featuring seamless event registration and secure online payment integration. The platform supports multiple user roles, including visitors, exhibitors, and administrators, with dedicated dashboards for exhibitors and admins to manage event details, monitor registrations, and handle transactions.",
    alt: "JC's Skin Works",
    image: WorldbexWeb,
    techStack: ["React", "Ant Design", "TanStack", "Tailwind", "Axios"],
    githubLink: "https://github.com/Jhoneric12",
    deploymentLink: "https://register.worldbexevents.com/",
  },
  {
    id: 2,
    projectName: "Worldbex Services International Community App",
    role: "Main Frontend Mobile Developer",
    company: companyName,
    type: "mobile",
    description:
      "A mobile application for event visitors designed to enhance convenience and engagement throughout the event experience. It allows users to register for events, securely complete online payments, and browse events and participating exhibitors with detailed profiles. The app also includes an interactive Scan2Win game to encourage participation, along with an event map feature that helps users easily navigate venues and locate exhibitor booths.",
    alt: "JC's Skin Works",
    image: WorldbexMobile,
    techStack: ["React Native", "Expo", "React Native Paper", "TanStack", "Axios"],
    githubLink: "https://github.com/Jhoneric12",
    appStoreLink: "https://apps.apple.com/ph/app/wsi-community/id6446133238",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.dgsiworldbex.visitors&pli=1",
    appGalleryLink: "https://appgallery.huawei.com/app/C108239477",
  },
  {
    id: 3,
    projectName: "Web-Based Management Information System for JC's Skin Works Dermatology Clinic",
    role: "Main Full Stack Developer",
    company: "Thesis/Capstone Project",
    description:
      "An appointment management solution with email notifications, patient information management, sales and transaction processing, clinic products and services management, and more, catering to the needs of patients, staff, doctors, and administrators.",
    alt: "JC's Skin Works",
    image: JC,
    techStack: ["Tailwind", "AlpineJs", "Laravel", "Livewire", "MySql"],
    githubLink: "https://github.com/Jhoneric12",
    deploymentLink: "https://jc-skin.com",
  },
  {
    id: 4,
    projectName: "Hustle — Task Management App",
    role: "Solo Developer",
    company: "Personal Project",
    description:
      "This application offers features such as task creation, editing, prioritization, due date setting, and completion tracking.",
    alt: "Hustle",
    image: Hustle,
    techStack: ["NextJs", "Firebase", "Tailwind"],
    githubLink: "https://github.com/Jhoneric12/hustle",
    deploymentLink: "https://hustle-rho.vercel.app/",
  },
  //   {
  //     id: 5,
  //     projectName: "Hustle — Task Management App",
  //     role: "Solo Developer",
  //     company: "Personal Project",
  //     description:
  //       "This application offers features such as task creation, editing, prioritization, due date setting, and completion tracking.",
  //     alt: "Hustle",
  //     image: Hustle,
  //     techStack: ["NextJs", "Firebase", "Tailwind"],
  //     githubLink: "https://github.com/Jhoneric12/hustle",
  //     deploymentLink: "https://hustle-rho.vercel.app/",
  //   },
];

export const timelineData = [
  {
    id: 1,
    year: "April 2025 — Present",
    title: "Full Stack Web and Mobile Developer",
    subtitle: "Dynamic Global Soft Inc.",
    description:
      "Working as a Full Stack Web and Mobile Developer — building and maintaining web portals and mobile applications, covering frontend development with React and React Native, and backend development with ExpressJs and MySql.",
    icon: MdWork,
    type: "work",
  },
  {
    id: 2,
    year: "2021 — 2025",
    title: "Bachelor of Science in Information Technology",
    subtitle: "University of Rizal System",
    description:
      "Pursued a BSIT degree that sharpened problem-solving, software design, and development skills — turning passion into structured, professional knowledge.",
    icon: MdSchool,
    type: "education",
  },
];
