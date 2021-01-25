import React from 'react';
import {NavLink} from "react-router-dom";

function Common(props) {
  return (
      <section id="header" className="">
      <div className="container-fluid nav_bg pt-5">
        <div className="row pl-3 ">
          <div className="col-10 mx-auto">
            <div className="row home-txt">
              <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 ">
                <h1>
                  {props.heading} <strong className="brand-name">{props.brand}</strong>
                </h1>
                <h2 className="mb-4">
                  {props.text}
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.img} className="img-fluid" alt="About img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Common;