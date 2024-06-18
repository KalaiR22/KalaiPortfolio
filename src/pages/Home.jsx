import React from 'react'
import Banner from '../components/Banner';
import Crisscross from '../components/Crisscross';
import AboutMe from '../components/AboutMe';
import Tools from '../components/Tools';

export default function Home() {
  return (
    <div className="pt-24">
      <Banner />
      <Crisscross/>
      <AboutMe/>
      <Tools/>
    </div>
  );
}
