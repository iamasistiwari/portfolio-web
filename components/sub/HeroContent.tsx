import React from 'react'
import Image from 'next/image'
import ScrollingText from './ScrollingText'


export default function HeroContent() {
  return (
    <div id='home'>
        <div className='flex ml-6 lg:ml-0 lg:justify-center mt-4 flex-row lg:items-center lg:mt-20'>
            <div className='relative w-32 h-32 lg:w-56 lg:h-56 opacity-80 hover:opacity-90 bg-neutral-900  rounded-image overflow-hidden transition-all duration-200'>
                <Image
                className='object-cover'
                src={'/profileIcon.jpg'}
                alt='dp'
                fill
                />
            </div>
            <div className='text-sm lg:text-xl text-center lg:text-justify lg:pl-7 lg:pt-8 hidden lg:block'>
                <p className='lg:pb-4 '> <span className="wave opacity-90">👋</span><span className='opacity-60 pl-1'>Hello I Am</span></p>
                <p className='text-2xl lg:text-4xl text-neutral-200 pb-2'>Ashish Tiwari</p>
                <p className='text-xs lg:text-base text-neutral-500 lg:tracking-tighter max-w-64 lg:max-w-[400px]'>I&apos;m a student with an interest in Full Stack Developer and Blockchain Technology. Currently, I am focused on developing my skills through building real world projects.</p>
            </div>
            <div className='pl-4 lg:hidden'>
                <p className='text-sm font-normal  pt-4 pb-2'> <span className="wave opacity-90">👋</span><span className='opacity-60 pl-0.5'>Hello I Am</span></p>
                <p className=' text-neutral-200 text-justify tracking-widest font-bold text-3xl opacity-90'>ASHISH</p>
                <p className=' text-neutral-200 text-justify tracking-widest font-bold text-3xl mt-1 opacity-90'>TIWARI</p>
            </div>
            
        </div>
        <p className='block lg:hidden w-screen text-xs pt-3 lg:text-base text-neutral-500 px-6'>I&apos;m a student with an interest in Full Stack Developer and Blockchain Technology. Currently, I am focused on developing my skills through building real world projects.</p>
        <div className='max-w-screen justify-center items-center text-center flex mt-10 rounded-2xl'>
            <div className='max-w-80 lg:max-w-2xl lg:px-3 opacity-50 rounded-2xl border-b border-dotted border-neutral-800 pb-4'>
                <ScrollingText />
            </div>
        </div>
                
    </div>

  )

}
