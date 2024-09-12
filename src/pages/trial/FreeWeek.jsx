import React from 'react'
import { Link} from "react-router-dom"

import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const FreeWeek = () => {
  return (
    <div>
        <div>
    <div className='trial-main'>
        <h1 className='trial-title'>JOIN US FOR A FREE CLASS!</h1>
        <h1 className="warning">We are offering a week of free classes to kick off the year! 
        To sign up, please fill out the following <Link to= "https://forms.gle/Ry6kJvyKnSPv6bTy7" target="_blank" className="waiver-ubc">google form</Link> with your desired classtime(s) and 
        sign our waiver <Link to= "https://cglink.me/2fM/s33390" target="_blank" className="waiver-ubc">here.</Link> Or, this <Link to= "https://cglink.me/2fM/s49312" target="_blank" className="waiver-ubc">waiver</Link> if 
        you are non-UBC.<br/><br/> If you are busy and unable to make this week, send a message over Instagram or Mail and we can accomodate for you to come 
        in at another time!</h1>
    </div>
    </div>




    </div>
  )
}

export default FreeWeek