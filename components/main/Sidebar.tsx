import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <LeftSidebar/>
      <RightSidebar />
    </div>
  )
}

function LeftSidebar() {
  return (
    <div className='hidden xl:block fixed pl-40 left-0 h-screen'>
      <div className='h-screen absolute top-20 border-r border-neutral-900 w-full'>
        
      </div>
    </div>
  )
}
function RightSidebar() {
  return (
    <div className='hidden xl:block fixed pr-40 right-0 h-screen'>
      <div className='h-full border-l border-neutral-900'>
        Right fiabdf
      </div>
    </div>
  )
}