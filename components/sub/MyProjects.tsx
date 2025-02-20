"use client"
import React from 'react'
import { fadeInAnimationVarients, ProjectsList } from '@/lib/constants'
import Image from "next/image";
import {  motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
/* eslint-disable @typescript-eslint/no-unused-vars */




export default function MyProjects() {
  const navigate = useRouter();
  return (
    <div>
      {ProjectsList.map((project, index) => (
        <motion.div key={index}
        onClick={() => {navigate.push(`/projects/${index}`)}}
        variants={fadeInAnimationVarients}
        initial="initial"
        whileInView='animate' 
        viewport={{
          once: true
        }}
        custom={index }
        className="relative overflow-hidden shadow-lg border border-neutral-900 max-w-72 lg:max-w-[620px] rounded-xl mt-4 cursor-pointer hover:bg-neutral-950">
            <Image
            src={project.icon[0]}
            alt={project.title || ''}
            width={1000}
            height={1000}
            className="w-full object-contain"
            />
    
            <div className="relative p-4">
              <h1 className="text-xl font-semibold lg:text-3xl text-white">{project.title}</h1>
              <p className="mt-2 text-xs lg:text-base text-neutral-400">{project.description}</p>
            </div>
      </motion.div>
      ))}
    </div>
  )
}


