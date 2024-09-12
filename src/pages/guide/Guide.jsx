import React from 'react'
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import vid from "../../assets/muaythai-video.mp4"
import guideimg from '../../assets/gear-guide.png';
import roundhouse from '../../assets/roundhouse.png';
import './guide.css'


const Guide = () => {
  return (
    <div>
      <Navbar/>
      <div className="guide-main">
      <h1 className="guide-title">NEW TO MUAYTHAI?</h1>
        <div>
        <video className="muaythai-video" controls>
        <source src={vid} type="video/mp4"/>
        </video>
        </div>
      <h1 className="description">
      Muaythai, also known as the "Art of Eight Limbs," is a dynamic martial art that originated in Thailand. What sets Muay Thai apart from other combat sports is its emphasis on utilizing the entire body as a weapon. Unlike some disciplines that primarily focus on punches or kicks, Muaythai incorporates strikes from various angles and distances, making it a highly dynamic and versatile martial art. The use of clinching, sweeps, knees, and elbow strikes gives Muaythai a distinct edge. For beginners, Muaythai offers an exciting, unique, and rewarding journey of self-discovery and physical fitness. Through training with your peers and coaches, you will develop strength, endurance, flexibility, and coordination. Additionally, Muaythai teaches discipline, respect, and mental toughness, helping you build self-confidence and improve your overall well-being. Whether you aspire to compete or simply want to challenge yourself and get in shape, Muaythai provides an exhilarating and transformative experience that will leave you hooked from day one!
      </h1>
      <h1 className="links-title">USEFUL LINKS</h1>
      
      <div className='guideimg'>
      <a href="https://www.youtube.com/watch?v=Z2D9j2MsC1A" target="_blank">
          <img src={roundhouse} alt="roundhouse"/>
          </a>
        </div>
     
      
      <div className='guideimg'>
      <a href="https://www.medium.com/@leowang801/what-to-get-for-muay-thai-classes-4092bb5d9734" target="_blank">
          <img src={guideimg} alt="guideimg"/>
          </a>
        </div>
      
      </div>
      <Footer/>
      
    </div>
    
  )
}

export default Guide