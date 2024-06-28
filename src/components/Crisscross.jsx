import React from 'react'
import crisscross from '../assets/criss-cross.png';

const Crisscross = () => {
   
  return (
    <div className="relative flex items-center w-full justify-center h-screen bg-black">
      <div className="absolute w-full h-12 rotate-12 bg-transparent">
        <div className="flex justify-around items-center w-full h-full bg-white text-black">
          <span className="flex items-center space-x-2">
            <span>Develop</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>Discover</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>Deploy</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>MERN</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>Blockchain</span>
            <span className="text-purple-500">✦</span>
          </span>
        </div>
      </div>
      <div className="absolute w-full h-12 -rotate-12 bg-transparent">
        <div className="flex justify-around items-center w-full h-full bg-white text-black">
          <span className="flex items-center space-x-2">
            <span>Develop</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>Discover</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>Deploy</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>MERN</span>
            <span className="text-purple-500">✦</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>Blockchain</span>
            <span className="text-purple-500">✦</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Crisscross
