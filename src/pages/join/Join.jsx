import React from 'react'

import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import {Link} from "react-router-dom";

import './join.css'

const Join = () => {
  return (
    <div>
        <Navbar/>
        <div className='join-main'>
        <h1 className='join-title'>HOW TO BECOME A MEMBER</h1>
        <div className='steps'>
            <div className='transfer'>
            <div className='transfer-rect'></div>
            <div className='text'>
                <h1 className='title'>1. Bounce</h1>
                <h1 className='line'></h1>   
                <h1 className='body'>Sign the waiver and request a membership from our Bounce <Link to= "https://www.bouncelife.com/events/66eaf14027015d576e826bcb/dashboard" target="_blank" className="here">here!</Link> </h1>
            </div>
            </div>

            <div className='campusbase'>
            <div className='transfer-rect'></div>
            <div className='text'>
                <h1 className='title'>2. Campusbase</h1>
                <h1 className='line'></h1> 
                <h1 className='body'>Wait for an approval message from one of our admins, and then submit your payment – once you've recieved a QR code, you're officially a member! That's it!.</h1>
            </div>
            </div>



        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Join