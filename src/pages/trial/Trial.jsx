import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link} from "react-router-dom"

import Navbar from "../../components/navbar/Navbar"
import FreeWeek from "./FreeWeek"
import Footer from "../../components/footer/Footer"

import "./trial.css"
const Trial = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ti0pw0p', 
      'template_z1gvxqn', 
      form.current, 
      "y5m132tk3OV2XpP37")
      .then((result) => {
          console.log(result.text);
          console.log("sent");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <Navbar/>

      <div className='trial-main'>
        <h1 className='trial-title'>JOIN US FOR A FREE CLASS!</h1>
        <h1 className="warning">Once we get our schedule finalized, you will be able to sign up for a free class – sorry for the inconvenience!</h1>

        {/* <h1 className="warning">Please fill out this <Link to= "https://cglink.me/2fM/s33390" target="_blank" className="waiver-ubc">waiver</Link> before registering!</h1>
        <h1 className="warningtwo">Or, this <Link to= "https://cglink.me/2fM/s49312" target="_blank" className="waiver-ubc">waiver</Link> if you are not affiliated with UBC </h1>
    
    <div className='textbox'>
      <form ref={form} onSubmit={sendEmail}>

        <label>Name</label>
        <input type="text" className='name' name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />


        <label>What day(s) do you plan on coming in?*</label>
        <input type="text" name="days" />
        <text className='twoclasses'>*You are free to choose up to two classes – please refer to our weekly schedule when picking your dates!</text>
        
        <label>Additional comments/questions</label>
        <textarea type="text" name="comments" rows="4"></textarea>
        
        <input className='button' type="submit" value="Register!" />
      </form> 
    </div>*/}
    </div>


        <Footer/>
    </div>
  )
}

export default Trial