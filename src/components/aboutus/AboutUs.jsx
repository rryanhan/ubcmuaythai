import React from 'react'
import './aboutus.css';
import group from '../../assets/groupphoto.png';
const AboutUs = () => {
  return (
    <div className="about-main">
    <div className='header'>
      <div className='about-body'>
      <h1 className='about'> WHAT WE'RE ABOUT</h1>
      <h1 className='description-text'>We are based on the belief that Muaythai is not just a self-defence combat sport – it is a journey towards building character and confidence alongside your fellow students. No matter what your reason for training is, we hope you form close and supportive bonds as you practice the art of Muaythai. Ultimately, our goal is to build a community like no other and help contribute to your unique university experience!</h1>
       </div>
        <div className="photo">
          <img src={group} className="centered-photo" alt="group"/>
        </div>
      </div>
      </div>
  )
}

export default AboutUs