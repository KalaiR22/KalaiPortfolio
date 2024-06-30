import React from 'react';
import { motion } from "framer-motion";
import ministar from '../assets/ministar.png';
import { workexperience } from '../constants';

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


const WorkExperience = () => {
  return (
    <div className=" px-4  sm:px-10 md:px-10 xl:px-14 2xl:px-20 flex flex-col py-16 ">
      <motion.div
        className="mx-auto"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        <h1 className="text-radial-gradient title text-center pb-4">
          Work Experience
        </h1>
      </motion.div>
      <motion.div
        className="para-1 pt-2  text-center mx-auto "
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        Extensive experience across various roles, demonstrating adaptability
        and growth.
      </motion.div>
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-36 mx-auto md:m-0  mg:px-1 lg:px-5 xl:px-10 py-12 sm:py-24 md:py-32">
        {workexperience.map((work) => (
          <motion.div
            className="flex flex-col md:flex-row gap-8  md:justify-between"
            key={work.id}
            variants={textVariants}
            initial="initialone"
            whileInView="animate"
          >
            <div className="flex justify-center gap-2 sm:gap-4">
              <div className=" pt-[.6rem] sm:pt-[1rem] md:pt-[2rem] lg:pt-[2.2rem] xl:pt-[3.4rem]">
                <img
                  src={ministar}
                  alt="star"
                  className="h-[1.5rem] w-[1.5rem] sm:h-[2rem] sm:w-[2rem]"
                />
              </div>
              <div className="flex flex-col justify-center leading-[2.5rem] sm:leading-[3.5rem] lg:leading-[4.8rem]">
                <div className="titlefour">{work.company}</div>
                <div className="titlefive">{work.role}</div>
                <div className="titlefive">{work.part}</div>
              </div>
            </div>
            <div className="flex flex-col sm:w-[350px] md:w-[330px] lg:w-[460px] xl:w-[565px] gap-4 sm:gap-8 lg:gap-10">
              <div className="flex bottom-border pb-2 xl:pb-3 justify-between items-end">
                <div className="titlesix">Industry</div>
                <div className="para-6 pr-4">{work.industry}</div>
              </div>
              <div className="flex bottom-border sm:pb-2 xl:pb-3 justify-between items-end">
                <div className="titlesix">Location</div>
                <div className="para-6 pr-4">{work.location}</div>
              </div>
              <div className="flex bottom-border sm:pb-2 xl:pb-3 justify-between items-end">
                <div className="titlesix">Year</div>
                <div className="para-6 pr-4 ">{work.year}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience
