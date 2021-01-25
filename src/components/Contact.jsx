import React, { useState } from 'react';
import Input from "./subcomponents/Input"

  function Contact() {
    const [data, setData] = useState({
      fullName:"",
      mobileNumber:"",
      email:"",
      message:""
  });
  function inputData(event){
    const {name, value} = event.target;
    setData(prevValue => {
      return{
        ...prevValue,
        [name]: value
      }
    })
  }
  function reset(){
    setData({
      fullName:"",
      mobileNumber:"",
      email:"",
      message:""
    })
  
  }
  function submitData(event){
    event.preventDefault();
    reset();
    alert(`ThankYou for your response ${data.fullName}. We will contact you soon.`);
  }

  return (
    <div>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form  onSubmit={submitData }>
            <Input 
              text="Full Name" 
              type="text" 
              placeholder="Adam Smith" 
              name="fullName" 
              value={data.fullName}
              onChange={inputData}
            /> 
             <Input 
              text="Mobile Number" 
              type="number" 
              placeholder="9998887776" 
              name="mobileNumber" 
              value={data.mobileNumber}
              onChange={inputData}
            /> 
            <Input 
              text="Email address" 
              type="email" 
              placeholder="name@example.com"
              name="email" 
              value={data.email}
              onChange={inputData}
            />
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea name="message" value={data.message}  onChange={inputData} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-dark"  type="submit">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;