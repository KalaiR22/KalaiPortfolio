import React from 'react'
import hi from '../assets/hi.png'
import line from '../assets/line.png'
import main from '../assets/main.png'
import cone from '../assets/cone.png'
import chain from '../assets/chain.png'
import chaintwo from "../assets/chaintwo.png";

const Banner = () => {
  return (
    <div className="px-4 sm:px-10 xl:px-14 2xl:px-20 justify-between flex relative">
      <div className="py-20">
        <div>
          <div className="text-linear-gradient hello">
            Hi!
            <span className="inline-block">
              <img
                src={hi}
                alt="hi"
                className="ml-6 lg:h-[5rem] lg:w-[5rem] xl:h-[6rem] xl:w-[6rem] "
              />{" "}
            </span>{" "}
            <br />
            I’m Kalaivani
          </div>
        </div>
        <div>
          <div className="text-radial-gradient pt-8">
            <span className="lg:text-[1.8rem] xl:text-[3rem] font-roboto font-bold inline-block ">
              Aspiring{" "}
              <span className="inline-block">
                <img src={line} alt="hi" className="lg:w-[90%] xl:w-full" />{" "}
              </span>{" "}
            </span>
            <br />
            <span className="title">MERN Stack Developer</span>
          </div>
          <div className="para-1 pt-4">
            with a passion for solving problems that involve creativity and
            innovation
          </div>
        </div>
      </div>
      <div className="lg:h-[26rem] lg:w-[26rem] xl:h-[30rem] xl:w-[30rem] flex lg:items-center">
        <img src={main} alt="working" />
      </div>
      <div>
        <div className="absolute right-2/4 lg:h-[6rem] lg:w-[6rem] xl:h-[7rem] xl:w-[7rem] 2xl:w-[9rem] 2xl:h-[9rem]">
          <img src={cone} alt="cone" />
        </div>
        <div className="absolute lg:top-[.9rem] lg:right-[3rem] xl:top-[1rem] xl:right-[1rem]  2xl:top-[4rem] 2xl:right-[4rem] lg:w-[6rem] lg:h-[6rem] 2xl:w-[8rem] 2xl:h-[8rem]">
          <img src={chain} alt="chain" />
        </div>
        <div className="absolute top-[26rem] right-0  lg:w-[6rem] lg:h-[6rem] xl:h-[7rem]  xl:w-[7rem] 2xl:w-[9rem] 2xl:h-[10rem]">
          <img src={chaintwo} alt="chain" />
        </div>
        <div className="absolute lg:w-[6rem] lg:h-[6rem] lg:top-[34rem] lg:right-[28rem] xl:top-[38rem] xl:right-[35rem]">
          <img src={chain} alt="chain" />
        </div>
      </div>
    </div>
  );
}

export default Banner
