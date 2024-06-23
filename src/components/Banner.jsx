import React from 'react'
import hi from '../assets/hi.png'
import line from '../assets/line.png'
import main from '../assets/main.png'
import cone from '../assets/cone.png'
import chain from '../assets/chain.png'
import chaintwo from "../assets/chaintwo.png";

const Banner = () => {
  return (
    <div className="px-4 sm:px-10 md:px-10 xl:px-14 2xl:px-20 md:justify-between  mx-auto flex  flex-col-reverse items-center justify-center  md:flex-row relative ">
      <div className="py-4 md:py-12 lg:py-20    ">
        <div>
          <div className="text-linear-gradient hello">
            Hi!
            <span className="inline-block">
              <img
                src={hi}
                alt="hi"
                className=" ml-4 sm:ml-6 h-[2.7rem] w-[2.7rem] sm:h-[5rem] sm:w-[5rem]  xl:h-[6rem] xl:w-[6rem]  "
              />{" "}
            </span>{" "}
            <br />
            I’m Kalaivani
          </div>
        </div>
        <div>
          <div className="text-radial-gradient pt-3  sm:pt-8">
            <span className="text-[1.3rem] sm:text-[2rem]  lg:text-[1.8rem] xl:text-[3rem] flex font-roboto font-bold items-end gap-2 ">
              Aspiring{" "}
              <span className="inline-block  align-bottom">
                <img
                  src={line}
                  alt="hi"
                  className="hidden sm:inline-block md:w-[90%] xl:w-full pb-2 "
                />
              </span>
            </span>
          </div>
          <br />
          <div className="text-radial-gradient title-main  sm:pt-4">
            MERN Stack Developer
          </div>
          <div className="para-1 sm:pt-4">
            with a passion for solving problems that involve creativity and
            innovation
          </div>
        </div>
      </div>
      <div className=" mt-0 h-[13rem] w-[13rem] sm:h-[26rem] sm:w-[26rem] lg:h-[26rem] lg:w-[26rem] xl:h-[30rem] xl:w-[30rem] flex md:items-center  mx-auto">
        <img src={main} alt="working" />
      </div>
      <div>
        <div className="absolute right-3/4 top-0 h-[2.5rem] w-[2.5rem] sm:h-[4rem] sm:w-[4rem] md:right-1/3 md:h-[1rem] md:w-[5rem] lg:h-[6rem] lg:w-[6rem] xl:h-[7rem] xl:w-[7rem] 2xl:w-[9rem] 2xl:h-[9rem]">
          <img src={cone} alt="cone" />
        </div>
        <div className="absolute top-[2rem]  right-[1.5rem] h-[2.5rem]  w-[2rem] sm:h-[4rem] sm:w-[4rem] md:top-[.9rem] md:right-[2.8rem] lg:top-[3rem] xl:top-[4rem] xl:right-[1rem]  2xl:top-[4rem] 2xl:right-[4rem] md:w-[4rem] md:h-[4rem] lg:w-[6rem] lg:h-[6rem] 2xl:w-[8rem] 2xl:h-[8rem]">
          <img src={chain} alt="chain" />
        </div>
        <div className="absolute top-[10rem] sm:top-[21rem] md:top-[26rem] right-0 w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] md:w-[4rem] md:h-[4rem]  lg:w-[6rem] lg:h-[6rem] xl:h-[7rem]  xl:w-[7rem] 2xl:w-[9rem] 2xl:h-[10rem]">
          <img src={chaintwo} alt="chain" />
        </div>
        <div className="absolute  w-[2rem] h-[2rem] sm:w-[5rem] sm:h-5rem lg:w-[6rem] lg:h-[6rem] top-[29rem] sm:top-[53rem] md:top-[30rem] lg:top-[34rem] md:right-[28rem] xl:top-[38rem] xl:right-[35rem]">
          <img src={chain} alt="chain" />
        </div>
      </div>
    </div>
  );
}

export default Banner
