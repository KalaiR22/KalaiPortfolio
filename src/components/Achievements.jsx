import React from 'react'
import { achievmentimage } from '../constants';
import { achievements } from '../constants';

const Achievements = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <h1 className="text-radial-gradient title text-center pb-4">
          Achievements
        </h1>
      </div>
      <div className="para-1 pt-2  text-center mx-auto leading-6">
        Celebrating key successes and professional highlights and showcasing
        impactful <br />
        results and accolades.
      </div>
      <div className="flex py-28 justify-between">
        {achievmentimage.map((images) => (
          <div key={images.id}>
            <img src={images.image} alt="pic" />
          </div>
        ))}
      </div>
      <div className="px-4 sm:px-10 md:px-28 flex flex-col gap-6 py-10">
        {achievements.map((achievement) => (
          <div key={achievement.id}>
            <div className="text-radial-gradient title ">{achievement.title}</div>
            <div className="title-7">Year: {achievement.year}</div>
            <div className="para-7 py-10 leading-7">{achievement.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements
