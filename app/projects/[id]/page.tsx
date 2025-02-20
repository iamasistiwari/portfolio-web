import React from 'react'
import { ProjectsList } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'


interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams(){
  return ProjectsList.map((_, index) => ({
    id: index.toString()
  }))
}


export default function Page({ params }: ProjectPageProps) {
  const  id  = params.id;
  
  return (
    <div className="text-white mt-24 flex flex-col mb-20 scroll-smooth">
      <div className="p-2 lg:px-20 flex flex-col justify-center items-center">
        {ProjectsList[Number(id)].icon.map((url, index) => (
          <Image
            src={url}
            alt="project-image "
            width={1200}
            height={1200}
            className="border border-neutral-500 rounded-2xl mb-4"
            key={index}
          />
        ))}
      </div>

      <div className="px-3 lg:px-20 mt-10 uppercase">
        <span className="font-extrabold text-2xl tracking-tight">
          {ProjectsList[Number(id)].title}
        </span>
      </div>

      <div className="text-sm lg:text-lg px-3 lg:px-20 mt-5 font-thin text-neutral-300 tracking-tight">
        {ProjectsList[Number(id)].detailedDescription}
      </div>

      <div className="flex flex-col lg:flex-row px-3 lg:px-20 gap-3 mt-16 ">
        <Link
          href={ProjectsList[Number(id)].githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl lg:text-2xl border bg-green-600 text-white border-neutral-900 p-3 rounded-xl text-center"
        >
          SOURCE CODE
        </Link>
        <Link
          href={ProjectsList[Number(id)].hostLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl  lg:text-2xl border border-neutral-900 p-3 rounded-xl bg-blue-800 text-center"
        >
          WEBSITE
        </Link>
      </div>

      <div className="p-2 lg:px-20 flex flex-col justify-center items-center mt-10">
        {ProjectsList[Number(id)].photos.map((url, index) => (
          <Image
            src={url}
            alt="project-image "
            width={700}
            height={700}
            className="border border-neutral-500 rounded-2xl"
            key={index}
          />
        ))}
      </div>

      <div className="flex text-xl lg:text-2xl px-3 lg:px-20 justify-center items-center mt-10">
        <div className="text-start">
          <h1 className="font-bold text-[22px] lg:text-[28px] mb-4">
            TECH STACK USED
          </h1>
          {ProjectsList[Number(id)].techStacks.map((val, index) => {
            return (
              <h1
                key={index}
                className="text-sm lg:text-lg w-auto my-2 font-thin border border-neutral-900 p-2 text-center uppercase bg-neutral-950 rounded-2xl"
              >
                {val}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}
