import React from 'react'
import ministar from '../assets/ministar.png';
import { workexperience } from '../constants';

const WorkExperience = () => {
  return (
    <div className=" px-4 sm:px-10 md:px-28 flex flex-col py-16 ">
      <div className="mx-auto">
        <h1 className="text-radial-gradient title text-center pb-4">
          Work Experience
        </h1>
      </div>
      <div className="para-1 pt-2  text-center mx-auto ">
        Extensive experience across various roles, demonstrating adaptability
        and growth.
      </div>
      <div className="flex flex-col gap-36 px-10 py-32">
        {workexperience.map((work) => (
          <div className="flex justify-between" key={work.id}>
            <div className="flex gap-4">
              <div className="pt-[3.4rem]">
                <img src={ministar} alt="star" />
              </div>
              <div className="flex flex-col justify-center leading-[4.8rem]">
                <div className="titlefour">{work.company}</div>
                <div className="titlefive">{work.role}</div>
                <div className="titlefive">{work.part}</div>
              </div>
            </div>
            <div className="flex flex-col w-[565px] gap-10">
              <div className="flex bottom-border pb-3 justify-between items-end">
                <div className="titlesix">Industry</div>
                <div className="para-6 pr-4">{work.industry}</div>
              </div>
              <div className="flex bottom-border pb-3 justify-between items-end">
                <div className="titlesix">Location</div>
                <div className="para-6 pr-4">{work.location}</div>
              </div>
              <div className="flex bottom-border pb-3 justify-between items-end">
                <div className="titlesix">Year</div>
                <div className="para-6 pr-4 ">{work.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience
