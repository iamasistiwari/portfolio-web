"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';
export default function HeroContent() {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-8 lg:px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col justify-center gap-5 m-auto text-start'>
            <motion.div 
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text'>Full Stack Developer Portfolio</h1>
            </motion.div>
            
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-3xl lg:text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                    Providing 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from from-purple-500 to-cyan-500'> The Best </span>
                    Project Experience
                </span>
                <motion.p
                variants={slideInFromLeft(0.8)}
                className='text-sm lg:text-lg text-gray-400 my-5 max-w-[200px] lg:max-w-[600px] lg:w-auto h-auto'
                >
                    I&apos;m a Full Stack Software Engineer,
                    Check out my project and skills 
                </motion.p>
            </motion.div>
        </div>
        <motion.div
        variants={slideInFromTop}
        className='flex lg:hidden h-full justify-center items-center absolute top-[450px] lg:relative lg:top-0'
        >
            <Image src="/mainIconsdark.svg" alt="work icons" height={650}width={650} className='hidden lg:block'/>
            <Image src="/mainIconsdark.svg" alt="work icons" height={650}width={650} className='size-96 block md:hidden'/>

        </motion.div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='hidden md:block w-full max-w-full h-full justify-center items-center'
        >
            <Image src="/mainIconsdark.svg" alt="work icons" height={650}width={650} className='hidden lg:block'/>

        </motion.div>
    </motion.div>
  )
}
