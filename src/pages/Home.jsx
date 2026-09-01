import React from 'react';
import HomeBanar from '../components/Home/HomeBanar';
import HomeAbout from '../components/Home/HomeAbout';
import HomeServices from '../components/Home/HomeServices'; 
import HomeAboutMatter from '../components/Home/HomeAboutMatter';
import HomePortfolio from '../components/Home/HomePortfolio';
import StaticSection from '../components/static/StaticSection';
import HomePhotoshoot from '../components/Home/Home-photoshoot';
import HomeWebDesigning from '../components/Home/HomeWebDesigning';
import HomeClient from '../components/Home/HomeClient';
import Testimonials from '../components/Home/Testimonials';
import WhyChooseUs from '../components/Home/WhyChooseUs';


function Home() {
  return (
    <div>
      <HomeBanar />
      <HomeAbout />
      <HomeServices />

      <HomeAboutMatter />
      <HomePortfolio />
      <StaticSection />
      
      <HomePhotoshoot />
      <HomeWebDesigning />
      <HomeClient />

      <Testimonials />
      <WhyChooseUs />
     
      
    </div>
  );
}

export default Home;