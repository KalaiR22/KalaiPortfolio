import React, { useRef,useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import starone from "../assets/starone.png";
import chain from "../assets/chain.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLink } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import '../../src/App.css'

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
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const parallaxRef = useRef(null);
  return (
    <div className="relative px-4 mt-24 sm:px-14 lg:px-10 xl:px-14 2xl:px-20 flex flex-col">
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
        className="grid mx-auto md:grid-cols-2 xl:grid-cols-3 gap-12 relative py-20 sm:py-32"
        variants={textVariants}
        initial="initialone"
        whileInView="animate"
      >
        {projects.map((project) => (
          <motion.div
            style={{ backgroundColor: "rgba(31, 31, 33, 0.50)" }}
            className="relative shadow-sm shadow-[rgba(255, 255, 255, 0.50)] rounded-lg hover:shadow-md hover:skew-effect"
            key={project.id}
            variants={textVariants}
            initial="initialone"
            whileInView="animate"
          >
            <img src={project.image} alt="project" className="relative z-20" />
            <div className="flex justify-between items-center py-5 px-3">
              <div className="font-roboto text-2 font-semibold text-[20px]">
                {project.title}
              </div>
              <div className="flex gap-6">
                <motion.a
                  href={project.github}
                  className="text-[25px] bg-gradient-to-b from-gradientstart to-gradientend rounded-md p-[1px]"
                  whileHover={{ scale: 1.2 }}
                >
                  <TbBrandGithubFilled />
                </motion.a>
                <motion.a
                  href={project.link}
                  className="text-[25px] bg-gradient-to-b from-gradientstart to-gradientend rounded-md p-[1px]"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLink />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div>
        <motion.div className="absolute top-[4rem] right-0 h-[10rem] w-[8rem] sm:top-[1rem] lg:top-[5rem] sm:right-[1.5rem] lg:right-[2rem] xl:right-[4rem] -z-30 sm:h-[70rem] sm:w-[15rem] lg:h-[70rem] lg:w-[20rem] xl:h-[95rem] xl:w-[23rem]">
          <img src={starone} alt="star" />
        </motion.div>
        <motion.div
          className="absolute top-[7rem] right-[1rem] h-[4.5rem] w-[3.5rem] sm:h-[7rem] sm:w-[5rem] sm:top-[7rem] sm:right-[3rem] lg:top-[7rem] xl:top-[5rem] lg:right-[3rem] xl:right-[5rem] lg:h-[7rem] lg:w-[7rem] xl:h-[10rem] xl:w-[10rem]"
          initial={{ scale: 0 }}
          animate={{ scale: [1], y: [1, -1, 3, -2, 4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <img src={chain} alt="star" />
        </motion.div>
      </div>
      {showArrow && (
        <button
          className="fixed bottom-4 right-4 bg-gradient-to-b from-gradientstart to-gradientend text-white p-2 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Projects;
