import React from 'react'
import {tools} from '../constants'

const Tools = () => {
  return (
    <div className="pt-24 pb-16 sm:px-14 lg:px-10 xl:px-14 2xl:px-20 flex flex-col">
      <div className="mx-auto">
        <h1 className="text-radial-gradient title text-center pb-4">Tools</h1>
      </div>
      <div className="para-1 pt-2 lg:w-[70%] xl:w-[50%] text-center mx-auto leading-6">
        Mastering the key instruments for professional excellence and utilizing
        
        advanced software and technologies for superior outcomes.
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-5 xl:gap-12 py-24">
        {tools.map((tool) => (
          <div className="flex flex-col items-center gap-2" key={tool.id}>
            <img src={tool.image} alt="tool" />
            <div className="para-3">{tool.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools
