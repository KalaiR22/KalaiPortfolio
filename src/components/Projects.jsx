import React,{useRef} from 'react'
import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";
import { projects } from '../constants';
import starone from '../assets/starone.png';
import chain from '../assets/chain.png';

const textVariants = {
  initialone: {
    x: -100,
    opacity: 0,
  },
  initialtwo: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  const parallaxRef = useRef(null);
  return (
    <div className="relative px-4 sm:px-14 lg:px-10 xl:px-14 2xl:px-20  flex flex-col">
      <motion.div
        className="mx-auto"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        <h1 className="text-radial-gradient title text-center pb-4">
          Handpicked Projects
        </h1>
      </motion.div>
      <motion.div
        className="para-4 sm:pt-2 text-center mx-auto sm:leading-6"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        A curated selection of my standout projects, showcasing creativity and
        expertise.
      </motion.div>
      <motion.div
        className="grid mx-auto md:grid-cols-2 xl:grid-cols-3 gap-12 relative  py-20 sm:py-32"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="relative"
            key={project.id}
            variants={textVariants}
            initial="initialone"
            whileInView="animate"
          >
            <img src={project.image} alt="project" className="relative z-20" />
          </motion.div>
        ))}
      </motion.div>
      <div>
        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute top-[4rem] right-0 h-[10rem] w-[8rem] sm:top-[1rem] lg:top-[5rem] sm:right-[1.5rem] lg:right-[2rem] xl:right-[4rem] z-0 sm:h-[70rem] sm:w-[15rem] lg:h-[70rem] lg:w-[20rem] xl:h-[95rem]  xl:w-[23rem]">
            <img src={starone} alt="star" />
          </div>
          <div className="absolute top-[7rem] right-[1rem] h-[4.5rem] w-[3.5rem] sm:h-[7rem] sm:w-[5rem] sm:top-[7rem] sm:right-[3rem] lg:top-[7rem] xl:top-[5rem] lg:right-[3rem] xl:right-[5rem] lg:h-[7rem]  lg:w-[7rem] xl:h-[10rem]  xl:w-[10rem]">
            <img src={chain} alt="star" />
          </div>
        </ScrollParallax>
      </div>
    </div>
  );
}

export default Projects
