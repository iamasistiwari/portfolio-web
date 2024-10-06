"use client"
import React from 'react'
import Image from 'next/image'

import {
    RxDiscordLogo,
    RxGithubLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";
export default function Navbar() {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-10'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
            <Image 
            src="/NavLogo.png"
            alt='logo'
            width={70}
            height={70}
            className='cursor-pointer hover:animate-slowspin'
            />
            
            <span className='font-bold ml-[10px] hidden md:block text-gray-300'>WebChain Dev</span>
        </a>
        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
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
