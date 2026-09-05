import React from 'react';
import Banner from '../components/About/Banner'; 
import Intro from '../components/About/Intro'; 
import StaticSection from '../components/static/StaticSection';
import OurJourney from '../components/About/OurJourney'; 

const About = () => {
  return (
    <div className="about-page">
      
      <Banner />

      <Intro />

      <StaticSection />

      <OurJourney />


    </div>
  );
};

export default About;