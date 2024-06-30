import React, { useState } from "react";
import MovingComponent from "react-moving-text";

const AnimationsForChaining = ["blur", "bounce", "effect3D", "swing"];

import ministar from "../assets/ministar.png";

const textItems = ["Develop", "Discover", "Deploy", "MERN", "Blockchain"];

const Crisscross = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(selectedItems[animationIndex + 1]);
  };
  return (
    <div className="relative flex flex-col  items-center w-full justify-center  sm:my-20 h-96 overflow-hidden">
      <div className="absolute scrolling-wrapper py-2 border-y border-[#000000] bg-white rotate-[10deg]">
        <div className="scrolling-content  ">
          {textItems.map((text, index) => (
            <div key={index} className="ribbon-text-wrapper ">
              <img
                src={ministar}
                alt="star"
                className="h-[.7rem] w-[.7rem] sm:h-[1rem] sm:w-[1rem] md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem]"
              />
              <div className="ribbon-text text-center">{text}</div>
            </div>
          ))}
          {textItems.map((text, index) => (
            <div
              key={index + textItems.length}
              className="ribbon-text-wrapper  "
            >
              <img
                src={ministar}
                alt="star"
                className="h-[.7rem] w-[.7rem] sm:h-[1rem] sm:w-[1rem] md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem]"
              />
              <div className="ribbon-text text-center">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute scrolling-wrapper py-2 border-y border-[#000000] bg-white -rotate-[10deg]  ">
        <div className="scrolling-content  ">
          {textItems.map((text, index) => (
            <div key={index} className="ribbon-text-wrapper ">
              <img
                src={ministar}
                alt="star"
                className="h-[.7rem] w-[.7rem] sm:h-[1rem] sm:w-[1rem] md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem]"
              />
              <div className="ribbon-text text-center">{text}</div>
            </div>
          ))}
          {textItems.map((text, index) => (
            <div
              key={index + textItems.length}
              className="ribbon-text-wrapper  "
            >
              <img
                src={ministar}
                alt="star"
                className="h-[.7rem] w-[.7rem] sm:h-[1rem] sm:w-[1rem] md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem]"
              />
              <div className="ribbon-text text-center">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crisscross;
