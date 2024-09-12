import React from 'react'
import { Link} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import best_nest from '../../assets/best_nest.png';
import mmhc from '../../assets/mmhc.png';
import aiyara from '../../assets/aiyara.png'
import firstweek from '../../assets/firstweek.png'
import './media.css'

const Media = () => {
  return (
    <div>
        <Navbar/>
        <div className='media-main'>
            <h1 className='media-title'>PHOTOS & VIDEOS</h1>
            <div className='firsttwo'>
                <div className='bestofnest'>
                <Link to= "/Best-of-the-Nest">
                <img className='best_nest_img' src={best_nest} alt="best_nest"/> 
                </Link>
                <h1 className='media-desc'>March 23, 2023: Best of the Nest</h1>
                </div>

                <div className='mmhc'>
                <Link to= "/Mens-Mental-Health-Collab">
                <img className='mmhc_img' src={mmhc} alt="mmhc"/> 
                </Link>
                <h1 className='media-desc'>March 21, 2023: Men's Mental Health Collab</h1>
                </div>
            </div>

            <div className='firsttwo'>
                <div className='aiyara'>
                <Link to= "/Thai-Aiyara-Collab">
                <img className='aiyara_img' src={aiyara} alt="aiyara"/> 
                </Link>
                <h1 className='media-desc'>March 11, 2023: Thai Aiyara Collab</h1>
                </div>

                <div className='firstweek'>
                <Link to= "/Firstweek">
                <img className='firstweek_img' src={firstweek} alt="firstweek"/> 
                </Link>
                <h1 className='media-desc'>January, 2023: First Week of Classes</h1>
                </div>
            </div>


        </div>



        <Footer/>
    </div>
  )
}

export default Media