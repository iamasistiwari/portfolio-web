import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


export default function Navbar() {
  return (
    <nav className='fixed top-0 w-screen z-50 bg-black'>
      <div className='w-full fixed top-0 z-50 bg-black flex justify-center px-2 lg:border-b border-neutral-900  py-4 space-x-3 lg:space-x-6 transition-all duration-200 lg:text-xl'>

        <Link
          href={'/'}
          className='flex border px-2 py-2 border-neutral-800 rounded-xl hover:bg-neutral-900 hover:cursor-pointer opacity-70 hover:opacity-100'>
          <div className='relative w-4 h-4 lg:w-6 lg:h-6 overflow-hidden mt-[2.5px] lg:mt-0'>
            <Image
              className='rounded-3xl object-cover'
              src={'https://framerusercontent.com/images/sGPkH0sNOJxultuXvtJfz43YyQ.svg'}
              alt='hello'
              fill
            />
          </div>
          <p className='ml-1'>HOME</p>
        </Link>

        <Link href='/#myskills' className='flex border px-2 py-2 border-neutral-800 rounded-xl hover:bg-neutral-900 hover:cursor-pointer opacity-70 hover:opacity-100'>
          <div className='relative w-4 h-4 lg:w-6 lg:h-6 overflow-hidden mt-[2.5px] lg:mt-0'>
            <Image
              className='rounded-3xl object-cover'
              src={'https://framerusercontent.com/images/B7g8c9FeulixXicIZXyuEdt9g0.svg'}
              alt='hello'
              fill
            />
          </div>
          <p className='ml-1'>SKILLS</p>
        </Link>

        <Link href='#projects' className='flex border px-2 py-2 border-neutral-800 rounded-xl hover:bg-neutral-900 hover:cursor-pointer opacity-70 hover:opacity-100'>
          <div className='relative w-4 h-4 lg:w-6 lg:h-6 overflow-hidden mt-[2.5px] lg:mt-0'>
            <Image
              className='rounded-3xl object-cover'
              src={'https://framerusercontent.com/images/P0kH73jXcqY75XYvfxH3SwcHs.svg'}
              alt='hello'
              fill
            />
          </div>
          <p className='ml-1'>PROJECTS</p>
        </Link>

        <div className='hidden lg:flex justify-center items-center space-x-7 pl-36 '>

          <Link href={`https://github.com/iamasistiwari`} target='_blank' className='text-2xl border p-2 border-neutral-800 rounded-xl hover:bg-neutral-900 hover:cursor-pointer opacity-70 hover:opacity-100'>
            <RxGithubLogo />
          </Link>

          <Link href={'https://twitter.com/iamasistiwari'} target='_blank' className='text-2xl border p-2 border-neutral-800 rounded-xl hover:bg-neutral-900 hover:cursor-pointer opacity-70 hover:opacity-100'>
            <RxTwitterLogo />
          </Link>
          <Link href={"https://www.linkedin.com/in/ashish-tiwari-0549552a9/"} target='_blank' className='text-2xl border p-2 border-neutral-800 rounded-xl hover:bg-neutral-900 hover:cursor-pointer opacity-70 hover:opacity-100'>
            <RxLinkedinLogo />
          </Link>
        </div>
      </div>
    </nav>

  )
}