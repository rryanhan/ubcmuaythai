import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';
import headband from '../../assets/headband.png';
import mail from '../../assets/mail.png';
import insta from '../../assets/insta.png';
import { Link} from "react-router-dom"

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ti0pw0p', 
      'template_cdh2yxm', 
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
    <div className='footer-main'>

      <div className='footer-border'></div>

      <div className='center-image'>
      <div className='center-image-one'>
      <h1 className='footer-contact'> CONTACT US</h1>
      <div className='footer-components'>

        <div className='links'>

          <div className='mail'>
          <a href="mailto:ubcmuaythai@gmail.com">
            <img className='mailimg' src={mail} alt="mail"/>
            <a className='mailhandle' >ubcmuaythai@gmail.com</a>
            </a>
          </div>

          <a href="https://www.instagram.com/ubcmuaythai/" target="_blank">
          <div className='insta'>
            <img className='instaimg'src={insta} alt="insta"/>
            <a className='instahandle'>@ubcmuaythai</a>
          </div>
          </a>
          
        </div>

        </div>
        </div>


          <div className='headband'>
            <img src={headband} alt="headband"/>
          </div>

        


        </div>
      </div>


  )
}

export default Footer