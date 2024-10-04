import React from 'react'

import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import schedule from '../../assets/schedule.png';

import './schedule.css'
const Schedule = () => {
  return (
    <div>
        <Navbar/>
        <div className="schedule-main">
        <h1 className="membership-title">MEMBERSHIP FEES</h1>
        <h1 className="membership-desc">Muaythai gyms can charge as much as $250 for a month - fortunately, we offer very affordable prices while teaching classes of quality as high as your local Muaythai gyms! Whether or not you are attending UBC, you are always welcome to join our community.</h1>
        <div className="ubc-students">
            <div>
            <h1 className="ubc-students-title">UBC Students</h1>
            </div>
            <div className="ubc-students-costs">
                <h1 className="monthly">$50.00 CAD/term</h1>
                <h1 className="returning-members">*45.00 CAD/term for returning members!</h1>
            </div>
        </div>
        <div className="ubc-students">
            <div>
            <h1 className="nonubc-students-title">Non-UBC Students</h1>
            </div>
            <div className="ubc-students-costs">
                <h1 className="monthly">$75.00 CAD/term</h1>
                <h1 className="returning-members">*70.00 CAD/term for returning members!</h1>
            </div>
        </div>
        <h1 className="schedule-title">WEEKLY SCHEDULE</h1>
        
         <div className="scheduleimg"> 
         
        <img src={schedule} alt="schedule"/>    
        </div>
           

        </div>

        <Footer/>
        
    </div>
  )
}

export default Schedule