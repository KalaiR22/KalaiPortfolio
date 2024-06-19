import React from 'react'
import AboutHero from '../components/AboutHero';
import WorkExperience from '../components/WorkExperience';
import Achievements from '../components/Achievements';

export default function About() {
  return <div className="pt-24">
    <AboutHero/>
    <WorkExperience/>
    <Achievements/>
  </div>;
}
