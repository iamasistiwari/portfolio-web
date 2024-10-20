"use client"
import React from 'react'

import {
    RxDiscordLogo,
    RxGithubLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";
export default function Navbar() {
  return (
    <div className='w-full h-[65px] shadow-sm shadow-[#2A0E61]/50 bg-[#03001417] z-50 pl-2 pr-4 lg:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between lg:m-auto lg:px-10'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
            <span className='font-bold ml-[10px]  text-gray-300'>Full Stack Developer</span>
        </a>
        <div className='w-[500px] h-full flex-row items-center justify-between md:mr-20 hidden md:flex'>
            <div className='flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                <a href='#about-me' className='cursor-pointer'>About me</a>
                <a href='#skills' className='cursor-pointer'>Skills</a>
                <a href='#projects' className='cursor-pointer'>Project</a>
            </div>
        </div>
        <div className='flex flex-row gap-5 text-white'>
            <div onClick={() => window.open("https://github.com/iamasistiwari")} className='text-2xl cursor-pointer'>
                <RxGithubLogo />
            </div>
            <div className='text-2xl cursor-pointer'>
                <RxDiscordLogo />
            </div>
            <div onClick={() => window.open("https://twitter.com/iamasistiwari")} className='text-2xl cursor-pointer'>
                <RxTwitterLogo />
            </div>
            <div onClick={() => window.open("https://www.linkedin.com/in/ashish-tiwari-0549552a9/")} className='text-2xl cursor-pointer'>
                <RxLinkedinLogo />
            </div>
        </div>
      </div>
    </div>
  )
}
