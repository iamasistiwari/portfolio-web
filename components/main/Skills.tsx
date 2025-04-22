import { Myskills } from '@/lib/constants'
import React from 'react'

export default function Skills() {
    return (
        <div id='hellos' className="w-[300px] lg:w-[650px] mt-4 flex flex-wrap gap-2 text-xs h-auto">
            {Myskills.map((skill, index) => (
                <span key={index} className="px-2 py-1  bg-gray-100 text-black rounded lg:text-base">
                    {skill}
                </span>
            ))}
        </div>

    )
}
