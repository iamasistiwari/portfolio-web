import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Sidebar from "@/components/main/Sidebar";
import MyProjects from "@/components/main/MyProjects";
import React from "react";
import Skills from "@/components/main/Skills";

export default function page() {
  return (
    <div className="font-bold text-4xl scroll-smooth">
      <Sidebar />
      <Hero />
      <div className="flex items-center justify-center flex-col mt-10" id="projects">
        <div id="" className="mt-2 opacity-90">Projects</div>
        <MyProjects />
        <span id="" className='mt-10'>My Skills</span>
        <Skills />
      </div>
      <div className="lg:px-72 mt-72">
        <Footer />
      </div>
    </div>
  );
}
