import React from 'react';
import Data from "../CardData"
import Card from "./subcomponents/Card";

function Service() {
  function per(set){
    return(
      <Card 
        key={set.id}
        img={set.image} 
        text={set.text} 
        title={set.title}
      />);
  }
  return (
    <div>
      <div className="my-4 mb-3">
        <h3 className="text-center">Our Services.</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {
                Data.map(per)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;