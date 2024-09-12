import React from 'react'
import './team.css';
import leo from '../../assets/leo.png';
import michelle from '../../assets/michelle.png';
import eddi from '../../assets/eddi.png';
import alex from '../../assets/alex.png';
import erin from '../../assets/erin.png';
import ryan from '../../assets/ryan.png';


const Team = () => {
  return (
  <div className='team-main'>
    <h1 className='meet-the-team'>MEET THE TEAM!</h1>
    <div className='first3'>

    <div className="ryan">
        <img src={ryan} alt="ryan"/>
        <h1 className='ryan-name'>Ryan Han</h1>
        <h1 className='ryan-description'>Co-President/Coach</h1>
        <h1 className='ryan-about'>2nd Year Studying Cognitive Sciences </h1>
    </div>

    <div className="leo">
        <img src={leo} alt="leo"/>
        <h1 className='leo-name'>Leo Wang</h1>
        <h1 className='leo-description'>Co-President/Coach</h1>
        <h1 className='ryan-about'>3rd Year Studying Computer Science + MM</h1>
    </div>

    <div className="alex">
        <img src={alex} alt="alex"/>
        <h1 className='alex-name'>Alex Dakers</h1>
        <h1 className='alex-description'>Treasurer</h1>
        <h1 className='ryan-about'>4th Year Studying Finance</h1>
    </div>
    </div>

    <div className='last3'>

    <div className="michelle">
        <img src={michelle} alt="michelle"/>
        <h1 className='michelle-name'>Michelle Peng</h1>
        <h1 className='michelle-description'>Marketing</h1>
        <h1 className='ryan-about'>3rd Year Studying Chemical and Biological Engineering</h1>
        <h1 className='michelle-about'></h1>
    </div>

    <div className="erin">
        <img src={erin} alt="erin"/>
        <h1 className='erin-name'>Erin Lau</h1>
        <h1 className='erin-description'>Communications</h1>
        <h1 className='ryan-about'>2nd Year Studying Neuroscience + MM</h1>
    </div>

    <div className="eddi">
        <img src={eddi} alt="eddi"/>
        <h1 className='eddi-name'>Eddi Xie</h1>
        <h1 className='eddi-description'>Media</h1>
        <h1 className='ryan-about'>3rd Year Studying Mechanical Engineering</h1>
    </div>
    </div>
    </div>
  )
}

export default Team