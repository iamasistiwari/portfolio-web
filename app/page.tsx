import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Sidebar from "@/components/main/Sidebar";
import MyProjects from "@/components/sub/MyProjects";
import React from "react";

export default function page() {
  return (
    <div className="font-bold text-4xl scroll-smooth">
      <Sidebar />
      <Hero />
      {/* <div className="flex items-center justify-center flex-col" id="skill">
        <div className="mt-2 opacity-90">My Skills</div>
        <MySkills />
      </div> */}
      <div className="flex items-center justify-center flex-col mt-10" id="projects">
        <div className="mt-2 opacity-90">Projects</div>
        <MyProjects />
      </div>
      <div className="lg:px-72 mt-72">
        <Footer />
      </div>
    </div>
  );
}
