import React from 'react'
import { motion } from "framer-motion";
import { footerlogo } from '../constants';


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

const Footer = () => {
  return (
    <div className="flex flex-col px-4 sm:px-10 xl:px-14 2xl:px-28">
      <motion.div
        className="mx-auto"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        <h1 className=" titletwo text-center  md:leading-[3rem] lg:leading-[5rem] ">
          Have an Awesome Project <br /> Idea?
        </h1>
      </motion.div>
      <motion.div
        className="mx-auto"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        <h1 className="text-radial-gradient title text-center ">
          Let’s Discuss
        </h1>
      </motion.div>
      <div
        className="flex flex-col lg:flex-row items-center justify-between sm:px-5 py-40"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        <motion.div
          className="text-radial-gradient title pb-2 text-center "
          variants={textVariants}
          initial="initialone"
          whileInView="animate"
        >
          Let’s Connect:
        </motion.div>
        <motion.div
          className="flex gap-2 lg:gap-6 xl:gap-12"
          variants={textVariants}
          initial="initialone"
          whileInView="animate"
        >
          {footerlogo.map((footer) => (
            <div key={footer.id}>
              <img src={footer.image} alt="logo" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="para-5 pb-4 text-center">
        Developed by kalaivani @2024.All rights received
      </div>
    </div>
  );
}

export default Footer
