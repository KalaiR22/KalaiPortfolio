import React from 'react'
import hi from '../assets/hi.png'
import line from '../assets/line.png'
import main from '../assets/main.png'
import cone from '../assets/cone.png'
import chain from '../assets/chain.png'
import chaintwo from "../assets/chaintwo.png";

const Banner = () => {
  return (
    <div className="px-4 sm:px-20 md:px-10 xl:px-14 2xl:px-20 justify-between flex  flex-col  md:flex-row relative ">
      <div className="py-4 md:py-12 lg:py-20 mx-auto">
        <div className="">
          <div className="text-linear-gradient hello">
            Hi!
            <span className="inline-block">
              <img
                src={hi}
                alt="hi"
                className="ml-6 sm:h-[5rem] sm:w-[5rem]  xl:h-[6rem] xl:w-[6rem]  "
              />{" "}
            </span>{" "}
            <br />
            I’m Kalaivani
          </div>
        </div>
        <div>
          <div className="text-radial-gradient pt-8">
            <span className="sm:text-[2rem]  lg:text-[1.8rem] xl:text-[3rem] flex font-roboto font-bold items-end gap-2 ">
              Aspiring{" "}
              <span className="inline-block">
                <img
                  src={line}
                  alt="hi"
                  className=" md:w-[90%] xl:w-full pb-2"
                />{" "}
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
      <div className=" sm:h-[26rem] sm:w-[26rem] lg:h-[26rem] lg:w-[26rem] xl:h-[30rem] xl:w-[30rem] flex md:items-center mx-auto">
        <img src={main} alt="working"  />
      </div>
      <div>
        <div className="absolute right-2/4 md:h-[5rem] md:w-[5rem] lg:h-[6rem] lg:w-[6rem] xl:h-[7rem] xl:w-[7rem] 2xl:w-[9rem] 2xl:h-[9rem]">
          <img src={cone} alt="cone" />
        </div>
        <div className="absolute md:top-[.9rem] md:right-[2.8rem] xl:top-[1rem] xl:right-[1rem]  2xl:top-[4rem] 2xl:right-[4rem] md:w-[4rem] md:h-[4rem] lg:w-[6rem] lg:h-[6rem] 2xl:w-[8rem] 2xl:h-[8rem]">
          <img src={chain} alt="chain" />
        </div>
        <div className="absolute top-[26rem] right-0 md:w-[4rem] md:h-[4rem]  lg:w-[6rem] lg:h-[6rem] xl:h-[7rem]  xl:w-[7rem] 2xl:w-[9rem] 2xl:h-[10rem]">
          <img src={chaintwo} alt="chain" />
        </div>
        <div className="absolute md:w-[4rem] md:h-[4rem] lg:w-[6rem] lg:h-[6rem] md:top-[30rem] lg:top-[34rem] md:right-[28rem] xl:top-[38rem] xl:right-[35rem]">
          <img src={chain} alt="chain" />
        </div>
      </div>
    </div>
  );
}

export default Banner
