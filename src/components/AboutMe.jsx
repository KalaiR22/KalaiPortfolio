import React from 'react'
import aboutme from '../assets/about.png';
import { GoArrowUpRight } from "react-icons/go";
import circle from '../assets/circles.png';
import conetwo from '../assets/conetwo.png';
import chainthree from '../assets/chainthree.png';


const AboutMe = () => {
  return (
    <div className="px-4  py-20 sm:px-10 md:px-28 pb-12  relative flex justify-between">
      <div className="flex justify-center items-center">
        <img src={aboutme} alt="about" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="mx-auto">
          <h1 className="text-radial-gradient title text-center pb-4">
            About Me
          </h1>
        </div>
        <div className="para-2 w-[703px] leading-6">
          We are a dedicated team of MERN stack developers passionate about
          creating dynamic and responsive web applications. With expertise in
          MongoDB, Express.js, React, and Node.js, we deliver seamless,
          full-stack solutions tailored to your needs. Our commitment to
          innovation and excellence ensures that we stay ahead of the curve in
          web development trends.
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <div className="text-center">
              <div className="text-radial-gradient title text-center">2+</div>
            </div>
            <div className="para-2 w-[102px] text-center leading-6">
              Years of experience
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-center">
              <div className="text-radial-gradient title text-center">10+</div>
            </div>
            <div className="para-2 w-[102px] text-center leading-6">
              Successfull projects
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-center">
              <div className="text-radial-gradient title text-center">4+</div>
            </div>
            <div className="para-2 w-[102px] text-center leading-6">
              Intern completion
            </div>
          </div>
        </div>
        <div className="mx-auto pt-6">
          <button className="flex gap-2 button-left-right rounded-full p-5">
            Check it out <GoArrowUpRight className="text-[31px]" />
          </button>
        </div>
      </div>

      <div>
        <div className="absolute top-0 left-5">
          <img src={circle} alt="circle" />
        </div>
        <div className="absolute top-7 right-0">
          <img src={conetwo} alt="cone" />
        </div>
        <div className="absolute top-[41rem] left-0">
          <img src={chainthree} alt="chain" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe
