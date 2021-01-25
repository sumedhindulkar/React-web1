import React from 'react';

function Input(props){
    return(
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{props.text}</label>
            <input 
            type={props.type}
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    )
}
export default Input;