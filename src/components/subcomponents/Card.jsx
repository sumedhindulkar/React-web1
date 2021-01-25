import React from "react";
import {NavLink} from "react-router-dom";

function Card(props){
    return(
    <div className="col-md-4 col-10 mx-auto ">
        <div className="card gy-md-3" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <NavLink to="/" className="btn btn-primary">Visit Website</NavLink>
            </div>
        </div>
    </div>
  );
}
 export default Card;