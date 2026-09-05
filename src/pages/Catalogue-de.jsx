import React from 'react';
import CataBanar from '../components/Catalogue/Cata-Banar'; 
import Cataimg from '../components/Catalogue/Cata-Img'; 
import Catabrushure from '../components/Catalogue/Cata-brushure'; 

const Catalogue = () => {
  return (
    <div className="catalogue-page">
      <CataBanar />
      <Cataimg />
      <Catabrushure />
    </div>
  );
};

export default Catalogue;