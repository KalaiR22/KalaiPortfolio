import React from 'react'
import aboutme from '../assets/about.png';
import { GoArrowUpRight } from "react-icons/go";
import circle from '../assets/circles.png';
import conetwo from '../assets/conetwo.png';
import chainthree from '../assets/chainthree.png';


const AboutMe = () => {
  return (
    <div className="py-14 sm:py-20 px-4 sm:px-10 xl:px-14 2xl:px-20   relative flex  flex-col lg:flex-row gap-10 lg:justify-between">
      <div className="flex justify-center items-center">
        <img
          src={aboutme}
          alt="about"
          className="h-[15rem] sm:h-[24rem] lg:w-full lg:h-fit"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="mx-auto">
          <h1 className="text-radial-gradient title text-center sm:pb-4">
            About Me
          </h1>
        </div>
        <div className="para-2  sm:w-full sm:px-5 md:px-16 lg:px-0 lg:w-[500px] xl:w-[703px] sm:leading-6">
          We are a dedicated team of MERN stack developers passionate about
          creating dynamic and responsive web applications. With expertise in
          MongoDB, Express.js, React, and Node.js, we deliver seamless,
          full-stack solutions tailored to your needs. Our commitment to
          innovation and excellence ensures that we stay ahead of the curve in
          web development trends.
        </div>
        <div className="flex flex-col sm:flex-row sm:px-5 md:px-16 lg:px-0 gap-4 sm:justify-between">
          <div className="flex flex-col gap-2 sm:gap-5">
            <div className="text-center">
              <div className="text-radial-gradient title text-center">2+</div>
            </div>
            <div className="para-2-sub sm:w-[102px] text-center sm:sm:leading-6">
              Years of experience
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-5">
            <div className="text-center">
              <div className="text-radial-gradient title text-center">10+</div>
            </div>
            <div className="para-2-sub sm:w-[102px] text-center sm:leading-6">
              Successfull projects
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-5">
            <div className="text-center">
              <div className="text-radial-gradient title text-center">4+</div>
            </div>
            <div className="para-2-sub sm:w-[102px] text-center leading-6">
              Intern completion
            </div>
          </div>
        </div>
        <div className="mx-auto pt-6">
          <button className="flex gap-2 button-left-right rounded-full p-3 sm:p-5">
            Check it out{" "}
            <GoArrowUpRight className="text-[21px] sm:text-[31px]" />
          </button>
        </div>
      </div>

      <div>
        <div className="absolute top-0 left-5 h-[6rem] w-[6rem] sm:h-[10rem] sm:w-[10rem] md:h-[12rem] md:w-[12rem] xl:h-[15rem] xl:w-[15rem]">
          <img src={circle} alt="circle" />
        </div>
        <div className="absolute h-[7rem] w-[3.5rem] top-[17rem] sm:top-[25rem] lg:top-7  right-0 sm:h-[9rem] sm:w-[5rem] lg:h-[8rem] lg:w-[4rem]  xl:h-[9rem] xl:w-[5rem]">
          <img src={conetwo} alt="cone" />
        </div>
        <div className="absolute md:top-[60rem] lg:top-[43rem] xl:top-[41rem] left-0 h-[5rem] w-[3rem] sm:h-[6rem] sm:w-[4rem] lg:h-[8rem] lg:w-[6rem] xl:h-[10rem] xl:w-[7rem]">
          <img src={chainthree} alt="chain" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe
