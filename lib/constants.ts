import { FaAws, FaCloudflare, FaDocker, FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongoose, SiPostgresql, SiRecoil, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";

export const fadeInAnimationVarients = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate:(index:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05*index,
        duration: 0.7,
      }
    })
}


  



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
    // {
    //     title: "Space -Write your blogs",
    //     description: "Medium-inspired blogging platform with a clean, minimalist design.",
    //     icon: '/space-website.png',
    //     detailedDescription: 'Space is a Medium-inspired blogging platform where users can create, delete, and browse blogs. Built with React and Tailwind CSS for the frontend, it uses Recoil for state management of posts, Express.js for the backend, MongoDB for the database, and JWT tokens for secure authentication. It offers a clean and user-friendly experience for content creation and exploration.',
    //     photos: '/space-website-1.png',
    //     techStacks: ['TypeScript', 'React', 'Recoil', 'Tailwind', 'Express', 'MongoDB'],
    //     hosted: 'Vercel',
    //     hostLink: 'https://space.ashishtiwari.net',
    //     githubLink: 'https://github.com/iamasistiwari/blog-website'
    // },
    // {
    //     title: "Vice -AI ChatBot",
    //     description: "Chatbot.",
    //     icon: '/vice-website.png',
    //     detailedDescription: "",
    //     photos: '',
    //     techStacks: ['Turborepo', 'TypeScript', 'Nextjs-14', 'Tailwind', 'Postgres', 'Python', 'Flask'],
    //     hosted: 'Vercel',
    //     hostLink: 'https://moodlog.ashishtiwari.net',
    //     githubLink: 'https://github.com/iamasistiwari/vice-website'
    // },
    {
        title: "Synapse- second brain",
        description: "app lets you stores content ( url, notes, etc ) and allow ai-search through your content.",
        icon: ['/synapse.png'],
        detailedDescription: "This project is a full-stack application built using Turborepo that allows users to create and manage notes. It features a novel editor to add notes, auto-fetches metadata from links, stores content in Supabase PostgreSQL, and supports embeddings search through the content.",
        photos: ['/sy1.png'],
        techStacks: ['Turborepo', 'TypeScript', 'Nextjs-15', 'Tailwind', 'Supabase-Postgres', 'Express'],
        hosted: 'Vercel',
        hostLink: 'https://synapse.ashishtiwari.net',
        githubLink: 'https://github.com/iamasistiwari/synapse-second-brain'
    },
    {
        title: "Realtime- TicTacToe",
        description: "realtime advanced queue based tictactoe game.",
        icon: ['/tc1.png', '/tc2.png'],
        detailedDescription: "realtime advanced queue based tictactoe game build with nextjs and websocket and all the game logic runs on the websocket server.",
        photos: ['/tc3.png'],
        techStacks: ['TypeScript', 'Nextjs-15', 'Tailwind', 'Websocket'],
        hosted: 'Vercel',
        hostLink: 'https://tictactoe.ashishtiwari.net',
        githubLink: 'https://github.com/iamasistiwari/advance-tictactoe'
    },
    {
        title: "Moodlog -Mood tracking website",
        description: "helps user to track their moods every day of every year.",
        icon: ['/moodlog-website.png'],
        detailedDescription: "Mood-Log is a web app that allows users to track their daily moods throughout the year. Built with Next.js and TypeScript, it features secure authentication via NextAuth and uses PostgreSQL for data storage. Users can log their mood each day, view entries on an interactive calendar, and analyze mood patterns over time. The app provides a simple yet effective way to monitor emotional well-being, helping users gain insights into their mental health.",
        photos: ['/moodlog-website-1.png'],
        techStacks: ['TypeScript', 'Nextjs', 'Tailwind', 'Postgres'],
        hosted: 'Vercel',
        hostLink: 'https://moodlog.ashishtiwari.net',
        githubLink: 'https://github.com/iamasistiwari/mood-log'
    },

];


export const  Frontend_skills_Icons = [
    {
        name: "Nextjs",
        url: "https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
    },
    {
        name: "Typescript",
        url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
    }
]