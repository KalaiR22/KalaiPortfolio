import React from 'react'

import { footerlogo } from '../constants';

const Footer = () => {
  return (
    <div className="flex flex-col px-4 sm:px-10 xl:px-14 2xl:px-28">
      <div className="mx-auto">
        <h1 className=" titletwo text-center  md:leading-[3rem] lg:leading-[5rem] ">
          Have an Awesome Project <br /> Idea?
        </h1>
      </div>
      <div className="mx-auto">
        <h1 className="text-radial-gradient title text-center ">
          Let’s Discuss 
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between sm:px-5 py-40">
        <div className="text-radial-gradient title pb-2 text-center ">
          Let’s Connect:
        </div>
        <div className="flex gap-2 lg:gap-6 xl:gap-12">
          
          {footerlogo.map((footer) => (
            <div key={footer.id}>
              <img src={footer.image} alt="logo" />
            </div>
          ))}
        </div>
      </div>
      <div className="para-5 pb-4 text-center">
        Developed by kalaivani @2024.All rights received
      </div>
    </div>
  );
}

export default Footer
