import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Collapsible from 'react-collapsible';
import Accordion from './Accordion';

import './faq.css'

const Faq = () => {
    const [collapsibleIsOpen, setCollapsibleIsOpen] = useState(false);

    const accordionData = [
        {
          title: 'What should I bring to classes?',
          content: `Bring a water bottle, athletic clothing, 
          and Muaythai gear (handwraps, gloves, and shin guards). 
          We do supply Muaythai gear, but keep in mind that we have limited supply.
          `
        },
        {
          title: 'Do we hold sparring sessions?',
          content: `While we do not hold sparring classes, 
          we often implement sparring and sparring drills in our intermediate/advanced classes. 
          However, safety is a priority in our club, and you must recieve approval from the 
          coaches before being able to spar. One of a mouthguard or headgear are 
          mandatory to spar (we supply headgear), and a cup is also recommended.
          `
        },
        {
          title: 'As a beginner, can I still attend intermediate and advanced classes?',
          content: `You are more than welcome to! While certain techniques may be more 
          difficult to grasp, our coaches will do their best to accommodate for you. 
          Just note that you will most likely be unable to participate in sparring.
          `
        }
      ];


  return (
    
    <div>
   
        <div className="faq-main">
      <h1 className="faq-title">FAQ</h1>
      <div className='faq-body'>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
      </div>


    </div>
  )
}

export default Faq