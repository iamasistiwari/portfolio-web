import Hero from '@/components/main/Hero'
import MyProjects from '@/components/sub/MyProjects'
import { MySkills } from '@/components/sub/MySkills'
import React from 'react'

export default function page() {
  return (
    <div className='font-bold text-4xl'>
      <Hero />
      <div className='flex items-center justify-center flex-col' id='skills'>
          <div className='mt-2 opacity-90'>My Skills</div>
          <MySkills />
      </div>
      <div className='flex items-center justify-center flex-col' id='projects'>
          <div className='mt-2 opacity-90'>Projects</div>
          <MyProjects />
      </div>
    </div>
  )
}
