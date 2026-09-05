import React from 'react';
import SBanner from '../components/Services/S-Banner'; 
import Sservice from '../components/Services/S-Service'; 
import Sstatic from '../components/Services/S-Static'; 
import SAll from '../components/Services/S-All'; 


const Service = () => {
  return (
    <div className="services-page">
      
      <SBanner />
        <Sservice />
        <Sstatic />
        <SAll />
      
   
    </div>
  );
};

export default Service;