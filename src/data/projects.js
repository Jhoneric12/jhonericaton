import JC from '../assets/JCs.png'
import Hustle from '../assets/Hustle.png'

export const Projects = [
    {
        id: 1,
        projectName: "Web-Based Management Informartion System for JC's Skin Works Dermatology Clinic",
        description: "Appointment management system with email notifications, patient information management, sales and transaction processing, and clinic products and services management, catering to the needs of patients, staff, doctors, and administrators.",
        alt: "JC's Skin Works",
        image: JC,
        techStack: ['Tailwind', 'AlpineJs', 'Laravel', 'Livewire', 'MySql']
    },
    {
        id: 2,
        projectName: "Hustle",
        description: "This application offers features such as task creation, editing, prioritization, due date setting, and completion tracking.",
        alt: "Hustle",
        image: Hustle,
        techStack: ['NextJs', 'Firebase', 'Tailwind']
    }

];