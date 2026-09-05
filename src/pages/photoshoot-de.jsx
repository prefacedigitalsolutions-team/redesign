import React from 'react';
import PhotoBanar from '../components/Photoshoot/photo-banar';
import Photoimg from '../components/Photoshoot/photo-img';  

const Photoshoot = () => {
  return (
    <div className="photoshoot-page">
      <PhotoBanar />
      <Photoimg />
    </div>
  );
};

export default Photoshoot;