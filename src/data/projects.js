import JC from '../assets/JC.png'
import Hustle from '../assets/Hustle.png'

export const Projects = [
    {
        id: 1,
        projectName: "Web-Based Management Informartion System for JC's Skin Works Dermatology Clinic | Capstone Project",
        description: "An appointment management solution with email notifications, patient information management, sales and transaction processing, clinic products and services management, and more, catering to the needs of patients, staff, doctors, and administrators.",
        alt: "JC's Skin Works",
        image: JC,
        techStack: ['Tailwind', 'AlpineJs', 'Laravel', 'Livewire', 'MySql'],
        githubLink: 'https://github.com/Jhoneric12',
        deploymentLink: 'https://jc-skin.com'
    },
    {
        id: 2,
        projectName: "Hustle",
        description: "This application offers features such as task creation, editing, prioritization, due date setting, and completion tracking.",
        alt: "Hustle",
        image: Hustle,
        techStack: ['NextJs', 'Firebase', 'Tailwind'],
        githubLink: 'https://github.com/Jhoneric12/hustle',
        deploymentLink: 'https://hustle-rho.vercel.app/'
    }

];