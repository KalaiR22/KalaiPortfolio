import React from 'react'
import hi from '../assets/hi.png'
import line from '../assets/line.png'
import main from '../assets/main.png'
import cone from '../assets/cone.png'
import chain from '../assets/chain.png'
import chaintwo from "../assets/chaintwo.png";

const Banner = () => {
  return (
    <div className="px-4 sm:px-10 md:px-28  flex relative">
      <div className="py-20">
        <div>
          <div className="text-linear-gradient hello">
            Hi!
            <span className="inline-block">
              <img src={hi} alt="hi" className="ml-6" />{" "}
            </span>{" "}
            <br />
            I’m Kalaivani
          </div>
        </div>
        <div>
          <div className="text-radial-gradient pt-8">
            <span className="text-[48px] font-roboto font-bold inline-block ">
              Aspiring{" "}
              <span className="inline-block">
                <img src={line} alt="hi" />{" "}
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
      <div className="pl-12">
        <img src={main} alt="working" />
      </div>
      <div className="absolute right-[43rem]">
        <img src={cone} alt="cone" />
      </div>
      <div className="absolute top-[4rem] right-[4rem]">
        <img src={chain} alt="chain" />
      </div>
      <div className="absolute top-[26rem] right-0 ">
        <img src={chaintwo} alt="chain" />
      </div>
      <div className="absolute top-[38rem] right-[35rem]">
        <img src={chain} alt="chain" />
      </div>
     
    </div>
  );
}

export default Banner
