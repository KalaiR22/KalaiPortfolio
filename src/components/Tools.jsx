import React from 'react'
import { motion } from "framer-motion";
import {tools} from '../constants'

const textVariants = {
  initialone: {
    x: -100,
    opacity: 0,
  },
  
};

const Tools = () => {
  return (
    <div className=" sm:pt-24 pb-16 px-4 sm:px-14 lg:px-10 xl:px-14 2xl:px-20 flex flex-col">
      <motion.div
        className="mx-auto"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        <h1 className="text-radial-gradient title text-center pb-4">Tools</h1>
      </motion.div>
      <motion.div
        className="para-1 sm:pt-2 lg:w-[70%] xl:w-[50%] text-center mx-auto sm:leading-6"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        Mastering the key instruments for professional excellence and utilizing
        advanced software and technologies for superior outcomes.
      </motion.div>
      <motion.div className="grid  grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-5 xl:gap-12 py-14 sm:py-24">
        {tools.map((tool) => (
          <motion.div
            className="flex flex-col items-center gap-1 sm:gap-2 "
            key={tool.id}
            variants={textVariants}
            initial="initialtwo"
            whileInView="animate"
          >
            <motion.img
              src={tool.image}
              alt="tool"
              className="h-[3rem] w-[3rem] sm:h-fit sm:w-fit"
              whileHover={{ scale: 1.2 }}
            />
            <div className="para-3">{tool.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tools
