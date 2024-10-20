import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 max-w-screen"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/medium.png"
          title="Medium Website Cloned"
          description="Here i tried to create medium website clone this is my first ever project."

        />
        <ProjectCard
          src="/vice-website.png"
          title="Vice ChatBot Website"
          description="This is the website of vice chatbot."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Portfolio Website"
          description="This is my portfolio website."
        />
      </div>
    </div>
  );
};

export default Projects;