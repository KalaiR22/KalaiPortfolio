import React from 'react'
import { footerlogo } from '../constants';

const Footer = () => {
  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-28">
      <div className="mx-auto">
        <h1 className=" titletwo text-center leading-[5rem] ">
          Have an Awesome Project <br /> Idea?
        </h1>
      </div>
      <div className="mx-auto">
        <h1 className="text-radial-gradient title text-center ">
          Let’s Discuss
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 py-40">
        <div className="text-radial-gradient title text-center ">
          Let’s Connect:
        </div>
        <div className="flex gap-12">
          {footerlogo.map((footer) => (
            <div>
              <img src={footer.image} alt="logo" />
            </div>
          ))}
        </div>
      </div>
      <div className='para-5 pb-4 text-center'>Developed by kalaivani @2024.All rights received</div>
    </div>
  );
}

export default Footer
