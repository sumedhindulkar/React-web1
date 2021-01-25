import React from 'react';
import Work from "../images/work.png";
import Common from "./subcomponents/Common"

function About() {
  const btn = "Contact Us";
  const heading = "Welcome to About Us page."
  const text = "We are a team of talented developer making websites."
  const visit ="/contact"
  return (
    <div>
      <Common  
        img={Work} 
        btn={btn} 
        heading={heading} 
        text={text}
        visit={visit}
      />
      <div className="pad-b"></div>
    </div>
  );
}

export default About;