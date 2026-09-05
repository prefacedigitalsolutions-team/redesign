import React from 'react';
import CBanar from '../components/Contact/C-Banar';
import CForm from '../components/Contact/C-Form';
import CMap from '../components/Contact/C-Map';


const Contact = () => {
  return (
    <div className="contact-page">
      <CBanar />
      
      <CForm/>
       <CMap/>

    </div>
  );
};

export default Contact;