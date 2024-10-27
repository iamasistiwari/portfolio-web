import React from 'react'
import { ProjectsList } from '@/lib/constants'
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-unused-vars */


export default function MyProjects() {
  return (
    <div>
      {ProjectsList.map((project, index) => (
        <div key={index} className="relative overflow-hidden shadow-lg border border-[#2A0E61] max-w-72 lg:max-w-[620px] rounded-xl mt-4 cursor-pointer hover:bg-neutral-950">
            <Image
            src={project.icon}
            alt={project.title || ''}
            width={1000}
            height={1000}
            className="w-full object-contain"
            />
    
            <div className="relative p-4">
              <h1 className="text-xl font-semibold lg:text-3xl text-white">{project.title}</h1>
              <p className="mt-2 text-xs lg:text-base text-neutral-400">{project.description}</p>
            </div>
      </div>
      ))}
    </div>
  )
}


