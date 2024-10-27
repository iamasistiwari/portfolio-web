import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiRecoil } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";

export const Frontend_skill = [
    {
        skill_name: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: FaReact 
    },
    {
        skill_name: "Tailwind",
        description: "Framework that lets you style websites quickly using pre-built classes.",
        icon: RiTailwindCssFill
    },
    {
        skill_name: "Typecript",
        description: "Superset of JavaScript that adds static typing for improved code quality.",
        icon: SiTypescript
    },
    {
        skill_name: "Nextjs",
        description: "React framework for building server-rendered and static web applications.",
        icon: RiNextjsFill
    },
    {
        skill_name: "Framer Motion",
        description: "React library for creating animations and transitions with a simple API.",
        icon: TbBrandFramerMotion
    },
    {
        skill_name: "Recoil",
        description: "State management library for React that simplifies global state handling.",
        icon: SiRecoil
    },
    {
        skill_name: "Figma",
        description: "Collaborative design tool for creating user interfaces and prototypes.",
        icon: FaFigma
    }
];

export const Backend_skill = [
    {
        skill_name: "Express",
        description: "Minimal Node.js framework for building web applications and APIs.",
        icon: SiExpress
    },
    {
        skill_name: "Postgresql",
        description: "PostgreSQL is a powerful, open-source relational database system.",
        icon: SiPostgresql
    },
    {
        skill_name: "Mongoose",
        description: "ODM library for Node.js that simplifies interactions with the database.",
        icon: SiMongoose
    },
];

export const Full_stack = [
    {
        skill_name: "React Native",
        description: "React Native is a framework for building mobile apps using React.",
        icon: TbBrandReactNative
    },
    {
        skill_name: "Docker",
        description: "Docker is a platform for running applications in isolated containers.",
        icon: FaDocker
    },
    {
        skill_name: "AWS",
        description: "Cloud platform offering a wide range of services like computing and storage.",
        icon: FaAws
    },
    {
        skill_name: "Cloudflare",
        description: "Platform that provides web performance & services like CDN, DDoS protection.",
        icon: FaCloudflare
    },
];

export const ProjectsList = [
    {
        title: "Medium Website Cloned",
        description: "It is medium website clone this is my first ever project.",
        icon: '/medium.png'
    },
    {
        title: "Vice ChatBot Website",
        description: "This is the website of vice chatbot.",
        icon: '/vice-website.png'
    },
];