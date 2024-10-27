"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'
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
import { FaJava } from "react-icons/fa";
import { FaCloudflare } from "react-icons/fa";


export default function ScrollingText() {
  return (
    <div className='w-full justify-center items-center flex text-neutral-300 rounded-2xl'>
      <div className='w-full rounded-2xl'>
        <Marquee autoFill speed={30}>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <FaJava />
                <p>Java</p>
            </div>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <FaReact />
                <p>React</p>
            </div>
            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <RiNextjsFill />
                <p>Nextjs</p>
            </div>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <SiTypescript />
                <p>Typescript</p>
            </div>


            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <SiPostgresql />
                <p>Postgresql</p>
            </div>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <SiRecoil />
                <p>Recoil</p>
            </div>


            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <FaFigma />
                <p>Figma</p>
            </div>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <SiExpress />
                <p>Express</p>
            </div>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <FaAws />
                <p>AWS</p>
            </div>
            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <FaCloudflare />
                <p>Cloudflare</p>
            </div>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <FaDocker />
                <p>Docker</p>
            </div>

            <div className='ml-2 bg-neutral-950 px-2 py-1 rounded-xl flex items-center gap-x-2 font-bold text-xl  '>
                <RiTailwindCssFill />
                <p>Tailwind</p>
            </div>
        </Marquee>
      </div>
    </div>
  )
}
