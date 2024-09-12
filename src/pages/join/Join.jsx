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
                <h1 className='title'>1. E-Transfer</h1>
                <h1 className='line'></h1>   
                <h1 className='body'>E-Transfer fee amount (refer to schedules & fees tab) to<a href="mailto:alexdtm01@gmail.com">  <u> alexdtm01@gmail.com</u></a>. Please include your full name, student number, your email, and “Muaythai club 23/24 T1.”</h1>
            </div>
            </div>

            <div className='campusbase'>
            <div className='transfer-rect'></div>
            <div className='text'>
                <h1 className='title'>2. Campusbase</h1>
                <h1 className='line'></h1> 
                <h1 className='body'>Join our Campusbase <Link to= "https://amscampusbase.ubc.ca/muaythai/club_signup" target="_blank" className="here">here</Link> – you will be asked to read and sign a waiver. If you are a non-UBC member, simply sign this <Link to= "https://cglink.me/2fM/s49312" target="_blank" className="waiver-ubc">waiver</Link> That's it!.</h1>
            </div>
            </div>



        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Join