import React from 'react'
import { projects } from '../constants';
import starone from '../assets/starone.png';
import chain from '../assets/chain.png';

const Projects = () => {
  return (
    <div className="relative px-4 sm:px-10 xl:px-14 2xl:px-28 flex flex-col">
      <div className="mx-auto">
        <h1 className="text-radial-gradient title text-center pb-4">
          Handpicked Projects
        </h1>
      </div>
      <div className="para-4 pt-2 text-center mx-auto leading-6">
        A curated selection of my standout projects, showcasing creativity and
        expertise.
      </div>
      <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-12 relative py-32">
        {projects.map((project) => (
          <div className="relative" key={project.id}>
            <img src={project.image} alt="project" className="relative z-20" />
          </div>
        ))}
      </div>
      <div>
        <div className="absolute top-[-5rem] lg:right-[2rem] xl:right-[4rem] z-0 lg:h-[70rem] lg:w-[20rem] xl:h-[95rem]  xl:w-[23rem]">
          <img src={starone} alt="star" />
        </div>
        <div className="absolute lg:top-[7rem] xl:top-[5rem] lg:right-[3rem] xl:right-[5rem] lg:h-[7rem]  lg:w-[7rem] xl:h-[10rem]  xl:w-[10rem]">
          <img src={chain} alt="star" />
        </div>
      </div>
    </div>
  );
}

export default Projects
