import { Frontend_skill } from '@/lib/constants'
import React from 'react'
import { Backend_skill } from '@/lib/constants'
import { Full_stack } from '@/lib/constants'
/* eslint-disable @typescript-eslint/no-unused-vars */


export function MySkills() {
  return (
    <div className=' p-5 rounded-xl transition-all duration-200'>
        
        <p className='text-lg opacity-90 mb-2'>Frontend Skills</p>
        {Frontend_skill.map((stack, index) => {
            const IconComponent = stack.icon
            return (
                <div key={index} className='flex border-neutral-800 rounded-2xl border bg-neutral-950 mb-4 opacity-85 max-w-[620px]  items-center hover:bg-neutral-800 transition-all duration-200'>
                    <span className='rounded-xl ml-2 m-2 bg-black p-2 h-14'><IconComponent /></span>
                    <div className='pt-2 pb-1'>
                        <p className='text-lg lg:text-2xl '>{stack.skill_name}</p>
                        <p className='text-xs lg:text-sm  opacity-50'>{stack.description}</p>
                    </div>
                </div>
            );
        })}

        
        <p className='text-lg opacity-90 mb-2'>Backend Skills</p>
        {Backend_skill.map((stack, index) => {
            const IconComponent = stack.icon
            return (
                <div key={index} className='flex border-neutral-800 rounded-2xl border bg-neutral-950 mb-4 opacity-85 max-w-[620px] items-center hover:bg-neutral-800 transition-all duration-200'>
                    <span className='rounded-xl ml-2 m-2 bg-black p-2 h-14'><IconComponent /></span>
                    <div className='pt-2 pb-1'>
                        <p className='text-lg lg:text-2xl'>{stack.skill_name}</p>
                        <p className='text-xs lg:text-sm  opacity-50'>{stack.description}</p>
                    </div>
                </div>
            );
        })}
        
        
        <p className='text-lg opacity-90 mb-2'>Other Skills</p>
        {Full_stack.map((stack, index) => {
            const IconComponent = stack.icon
            return (
                <div key={index} className='flex border-neutral-800 rounded-2xl border bg-neutral-950 mb-4 opacity-85 max-w-[620px] items-center hover:bg-neutral-800 transition-all duration-200'>
                    <span className='rounded-xl ml-2 m-2 bg-black p-2 h-14'><IconComponent /></span>
                    <div className='pt-2 pb-1'>
                        <p className='text-lg lg:text-2xl'>{stack.skill_name}</p>
                        <p className='text-xs lg:text-sm  opacity-50'>{stack.description}</p>
                    </div>
                </div>
            );
        })}
        
    </div>
  )
}