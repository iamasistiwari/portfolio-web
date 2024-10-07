"use client"

import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import React from 'react'

export default function SkillText() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div 
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] mb-8'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text'>Think better with Next js 14</h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[25px] lg:text-[35px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[20px] cursive text-gray-200 mt-[10px] text-center mb-10'
        >
            Never miss a task deadline or idea
        </motion.div>
    </div>
  )
}
