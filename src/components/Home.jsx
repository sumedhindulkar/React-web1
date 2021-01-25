import React from 'react';
import Rocket from "../images/rocket.png";
import Common from "./subcomponents/Common"

function Home() {
  const btn = "Get Started";
  const heading = "Make your beautiful website with "
  const brand = "SimplePanda."
  const text = "We are a team of talented developer making websites."
  const visit="/service"
  return (
      <Common  
        img={Rocket} 
        btn={btn} 
        heading={heading} 
        text={text}
        brand={brand}
        visit={visit}
      />
  );
}

export default Home;