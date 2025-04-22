interface ProjectsList {
    title: string,
    description: string,
    icon: string[]
    detailedDescription: string
    photos: string[]
    techStacks: string[]
    hosted: string
    hostLink: string
    githubLink: string
}

export const Myskills:string[] = [
    "React" , "Next.js", "Express", "WebSocket", "Typescript", "Tailwind", "Framer Motion", "Node.js", "Bun", "FastApi", "MongoDB", "Postgres", "Redis", "Prisma", "Linux", "Github Actions", "Docker", "Monorepo", "CI-CD",
    "AWS", "Digital Ocean", "Nginx"
]


export const ProjectsList: ProjectsList[] = [
    {
        title: "Trufake- deepfake detector PC-ONLY",
        description: "detects whether the user uploaded video is deepfake or not.",
        icon: ['/tf1.png', '/tf2.png'],
        detailedDescription: "app lets you detects whether the uploaded video is deepfake or not using model bulit from scratch build on top of pretrained model of huggingFace an request is sent to the model with videoUrl using FastApi and model downloads the video runs the model and send the response to the user.",
        photos: ['/tf3.png'],
        techStacks: [ "Turborepo", "CI-CD pipeline", "Framer Motion", 'TypeScript', 'Nextjs-15', "Next Auth" ,'Tailwind', "Postgres", 'Python', "FastApi", "Model build from scratch", ],
        hosted: 'VPS',
        hostLink: 'https://trufake.ashishtiwari.net/',
        githubLink: 'https://github.com/iamasistiwari/trufake'
    },

    {
        title: "Playfi– Real-Time Collaborative Music Player",
        description: "realtime music room app where audience decide to play music..",
        icon: ['/pf1.png', '/pf2.png'],
        detailedDescription: "This app allows you to create a room where your audience can join, add songs to a playlist, and vote on them. The top-voted song plays automatically, while only the admin has control over manually changing or playing songs.",
        photos: ['/pf3.png'],
        techStacks: [ "Turborepo", "CI-CD pipeline", "Framer Motion", 'TypeScript', 'Nextjs-15', "Next Auth" ,'Tailwind',"Postgres-Main Db","Redis-cache" ,'WebSocket', "Youtube-APIs"],
        hosted: 'VPS',
        hostLink: 'https://playfi.ashishtiwari.net/',
        githubLink: 'https://github.com/iamasistiwari/play-fi'
    },

    {
        title: "Synapse- second brain",
        description: "app lets you stores content ( url, notes, etc ) and allow ai-search through your content.",
        icon: ['/synapse.png'],
        detailedDescription: "This project is a full-stack application built using Turborepo that allows users to create and manage notes. It features a novel editor to add notes, auto-fetches metadata from links, stores content in Supabase PostgreSQL, and supports embeddings search through the content.",
        photos: ['/sy1.png'],
        techStacks: ['Turborepo', 'TypeScript', 'Nextjs-15', 'Tailwind', "Next Auth",'Supabase-Postgres', 'Express'],
        hosted: 'VPS',
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
        hosted: 'VPS',
        hostLink: 'https://tictactoe.ashishtiwari.net',
        githubLink: 'https://github.com/iamasistiwari/advance-tictactoe'
    },
    {
        title: "Moodlog -Mood tracking website",
        description: "helps user to track their moods every day of every year.",
        icon: ['/moodlog-website.png'],
        detailedDescription: "Mood-Log is a web app that allows users to track their daily moods throughout the year. Built with Next.js and TypeScript, it features secure authentication via NextAuth and uses PostgreSQL for data storage. Users can log their mood each day, view entries on an interactive calendar, and analyze mood patterns over time. The app provides a simple yet effective way to monitor emotional well-being, helping users gain insights into their mental health.",
        photos: ['/moodlog-website-1.png'],
        techStacks: ['TypeScript', 'Nextjs', 'Tailwind',"Next Auth" ,'Postgres'],
        hosted: 'Vercel',
        hostLink: 'https://moodlog.ashishtiwari.net',
        githubLink: 'https://github.com/iamasistiwari/mood-log'
    },

];


