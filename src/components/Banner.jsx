import React from 'react'
import hi from '../assets/hi.png'
import line from '../assets/line.png'

const Banner = () => {
  return (
    <div className="px-4 sm:px-10 md:px-24 py-14">
      <div>
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
          <div className="text-radial-gradient">
            <span className="text-[48px] font-roboto font-bold inline-block">
              Aspiring{" "}
              <span className="inline-block">
                <img src={line} alt="hi" />{" "}
              </span>{" "}
            </span>
            <br />
            <span className="title">MERN Stack Developer</span>
          </div>
          <div className="para-1">
            with a passion for solving problems that involve creativity and
            innovation
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
