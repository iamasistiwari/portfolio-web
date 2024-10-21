"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from 'next/image';
export default function HeroContent() {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-col xl:flex-row items-center justify-center px-8 lg:px-20 mt-28 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col justify-center gap-5 m-auto text-start '>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-4xl lg:text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span className='w-fill text-center font-bold tracking-wide xl:tracking-wider'>
                    Ashish Tiwari
                </span>
                <motion.p
                variants={slideInFromLeft(0.8)}
                className='text-sm items-center justify-center text-center w-full lg:text-lg text-neutral-600 my-5 h-auto'
                >
                    I&apos;m a student with an interest in Full Stack Developer and Blockchain Technology. Currently, I am focused on developing my skills through building real world projects
                </motion.p>
            </motion.div>
        </div>
        <motion.div
        variants={slideInFromTop}
        className='absolute lg:hidden  h-full justify-center items-center  top-[470px] lg:relative lg:top-0'
        >
            <Image src="/mainIconsdark.svg" alt="work icons" height={650}width={650} className='opacity-75' />

        </motion.div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='hidden md:block w-full max-w-full h-full justify-center items-center '
        >
            <Image src="/mainIconsdark.svg" alt="work icons" height={650}width={650} className='hidden lg:block opacity-50'/>
        </motion.div>
    </motion.div>
  )
}
