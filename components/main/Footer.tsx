"use client"
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full h-full bg-transparent text-gray-200 shadow-lg lg:p-[15px] mt-32 ">
        <div className="flex flex-col items-center justify-center ">
            <div className="grid grid-cols-2 items-center justify-around lg:flex lg:flex-row lg:flex-wrap xl:gap-36">
                
                <div className="h-auto flex flex-col items-center justify-start mx-10 lg:mx-0">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px]">Youtube</span>    
                    </p>
                    <p onClick={() => window.open("https://github.com/iamasistiwari")} className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px]">Discord</span>    
                    </p>
                </div>
                <div className="h-auto flex flex-col items-center justify-start pr-4 lg:pr-0">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <div onClick={() => window.open("https://www.instagram.com/iamasistiwari/")} className="text-white">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </p>
                    </div>

                    <div onClick={() => window.open("https://twitter.com/iamasistiwari")} className="text-white">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer ">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>    
                        </p>
                    </div>
                    
                    
                    <div onClick={() => window.open("https://www.linkedin.com/in/ashish-tiwari-0549552a9/")} className="text-white">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </p>
                    </div>
                </div>
                <div className="min-w-[200px] min-h-[175px] mb-[73px] flex-col items-center justify-start hidden lg:flex">
                    <div className="font-bold text-[16px]">Contact Details</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">iamashishtiwari2004@gmail.com</span>    
                    </p>
                </div>
            </div>
            <div className="min-w-[200px] min-h-[175px] flex flex-col items-center justify-start lg:hidden mt-16">
                    <div className="font-bold text-[16px]">Contact Details</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">iamashishtiwari2004@gmail.com</span>    
                    </p>
                </div>
            <div className="mb-[20px] mt-[20px] text-[15px] text-center ">
                &copy; Ashish Tiwari Portfolio
            </div>
        </div>
    </div>
  )
}

export default Footer