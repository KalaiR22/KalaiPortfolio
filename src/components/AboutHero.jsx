import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import chainfour from '../assets/chainfour.png';
import chainfive from '../assets/chainfive.png';
import startwo from '../assets/startwo.png'
import conethree from '../assets/conethree.png'

const AboutHero = () => {
  return (
    <div className="relative flex flex-col items-center leading-[7rem] py-32 px-4 sm:px-10 md:px-28">
      <div className="titlethree">Hi, I’m</div>
      <div className="titleone text-radial-gradient ">Kalaivani</div>
      <div className="para-2 w-[897px] text-center leading-6 pt-[2.5rem]">
        We are a dedicated team of MERN stack developers passionate about
        creating dynamic and responsive web applications. With expertise in
        MongoDB, Express.js, React, and Node.js, we deliver seamless, full-stack
        solutions tailored to your needs. Our commitment to innovation and
        excellence ensures that we stay ahead of the curve in web development
        trends.
      </div>
      <div className="flex gap-44 leading-[5rem] pt-[4rem]">
        <div className="flex flex-col ">
          <div className="text-center">
            <div className="text-radial-gradient title text-center">2+</div>
          </div>
          <div className="para-2 w-[102px] text-center leading-6">
            Years of experience
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-center">
            <div className="text-radial-gradient title text-center">10+</div>
          </div>
          <div className="para-2 w-[102px] text-center leading-6">
            Successfull projects
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-center">
            <div className="text-radial-gradient title text-center">4+</div>
          </div>
          <div className="para-2 w-[102px] text-center leading-6">
            Intern completion
          </div>
        </div>
      </div>
      <div className="mx-auto pt-12 leading-3 ">
        <button className="flex gap-2 button-left-right rounded-full p-5">
          Hire Me <GoArrowUpRight className="text-[31px]" />
        </button>
      </div>
      <div>
        <div className="absolute -top-24 left-5 ">
          <img src={startwo} alt="star" />
        </div>
        <div className="absolute top-[15rem] left-0 ">
          <img src={chainfour} alt="chain" />
        </div>
        <div className="absolute top-[7rem] right-[10rem]">
          <img src={chainfive} alt="chain" />
        </div>
        <div className="absolute bottom-[3rem] right-[31rem]">
          <img src={conethree} alt="cone" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero
