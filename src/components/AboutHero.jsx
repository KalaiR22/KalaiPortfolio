import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import chainfour from '../assets/chainfour.png';
import chainfive from '../assets/chainfive.png';
import startwo from '../assets/startwo.png'
import conethree from '../assets/conethree.png'

const AboutHero = () => {
  return (
    <div className="relative flex flex-col items-center leading-[3rem] sm:leading-[5rem] md:leading-[7rem] sm:py-10 md:py-14 lg:py-24 px-4  sm:px-10 md:px-10 xl:px-14 2xl:px-20">
      <div className="titlethree">Hi, I’m</div>
      <div className="titleone text-radial-gradient ">Kalaivani</div>
      <div className="para-2-about lg:w-[897px] text-center leading-5 sm:leading-6 pt-[1.5rem] sm:pt-[2rem] md:pt-[2.5rem]">
        We are a dedicated team of MERN stack developers passionate about
        creating dynamic and responsive web applications. With expertise in
        MongoDB, Express.js, React, and Node.js, we deliver seamless, full-stack
        solutions tailored to your needs. Our commitment to innovation and
        excellence ensures that we stay ahead of the curve in web development
        trends.
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-16 md:gap-32 lg:gap-44 sm:leading-[5rem] pt-[2rem] sm:pt-[4rem]">
        <div className="flex flex-col leading-0">
          <div className="text-center">
            <div className="text-radial-gradient title text-center">2+</div>
          </div>
          <div className="para-2-sub sm:w-[102px] text-center  leading-6">
            Years of experience
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-center">
            <div className="text-radial-gradient title text-center">10+</div>
          </div>
          <div className="para-2-sub sm:w-[102px] text-center leading-6">
            Successfull projects
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-center">
            <div className="text-radial-gradient title text-center">4+</div>
          </div>
          <div className="para-2-sub sm:w-[102px] text-center leading-6">
            Intern completion
          </div>
        </div>
      </div>
      <div className="mx-auto pt-12 leading-3 ">
        <button className="flex gap-2 button-left-right rounded-full p-3 sm:p-5">
          Hire Me <GoArrowUpRight className="text-[21px] sm:text-[31px]" />
        </button>
      </div>
      <div>
        <div className=" absolute h-[10rem] w-[7rem] sm:h-[30rem] sm:w-[18rem] md:h-[30rem] md:w-[20rem] lg:h-[35rem] lg:w-[25rem]  xl:w-fit xl:h-fit -top-10 sm:-top-24 left-5 ">
          <img src={startwo} alt="star" />
        </div>
        <div className="h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[6rem] md:w-[6rem] lg:h-[7rem] lg:w-[7rem]  xl:w-fit xl:h-fit absolute top-[2rem] sm:top-[6rem] md:top-[8rem] lg:top-[10rem] xl:top-[15rem] left-0 ">
          <img src={chainfour} alt="chain" />
        </div>
        <div className=" absolute h-[3.5rem] w-[3.5rem] sm:h-[6rem] sm:w-[6rem] md:h-[9rem] md:w-[9rem]  xl:w-fit xl:h-fit top-0 right-[1rem] sm:top-[2.5rem] sm:right-[2.5rem] md:top-[5rem] md:right-[4rem] lg:top-[6rem] lg:right-[8rem] xl:top-[7rem] xl:right-[10rem]">
          <img src={chainfive} alt="chain" />
        </div>
        <div className=" absolute lg:bottom-[2.5rem] xl:bottom-[3rem] h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[4rem] md:h-[4rem] md:w-[5rem] lg:h-[6rem] lg:w-[6rem] xl:w-fit xl:h-fit right-1/4">
          <img src={conethree} alt="cone" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero
