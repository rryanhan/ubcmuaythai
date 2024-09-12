import React from 'react'
import { Navbar } from '../../../../components'
import { Footer } from '../../../../components'

import mmhc_0 from "../../../../assets/mmhc/mmhc_0.png"
import mmhc_1 from "../../../../assets/mmhc/mmhc_1.png"
import mmhc_2 from "../../../../assets/mmhc/mmhc_2.png"
import mmhc_3 from "../../../../assets/mmhc/mmhc_3.png"
import mmhc_4 from "../../../../assets/mmhc/mmhc_4.png"
import mmhc_5 from "../../../../assets/mmhc/mmhc_5.png"
import mmhc_6 from "../../../../assets/mmhc/mmhc_6.png"
import mmhc_7 from "../../../../assets/mmhc/mmhc_7.png"
import mmhc_8 from "../../../../assets/mmhc/mmhc_8.png"
import mmhc_9 from "../../../../assets/mmhc/mmhc_9.png"
import mmhc_10 from "../../../../assets/mmhc/mmhc_10.png"
import mmhc_11 from "../../../../assets/mmhc/mmhc_11.mp4"
import mmhc_12 from "../../../../assets/mmhc/mmhc_12.png"
import mmhc_13 from "../../../../assets/mmhc/mmhc_13.png"
import mmhc_14 from "../../../../assets/mmhc/mmhc_14.png"
import mmhc_15 from "../../../../assets/mmhc/mmhc_15.png"
import mmhc_16 from "../../../../assets/mmhc/mmhc_16.mp4"
import mmhc_17 from "../../../../assets/mmhc/mmhc_17.mp4"
import mmhc_18 from "../../../../assets/mmhc/mmhc_18.mp4"
import mmhc_19 from "../../../../assets/mmhc/mmhc_19.mp4"

import './mmhc.css'
const Mmhc = () => {
  return (
    <div>
        <Navbar/>

        <div className='mmhc-main'>
            <h1 className='mmhc-title'>MEN'S MENTAL HEALTH COLLAB</h1>
            <div className='mmhc-album'>
            <img src={mmhc_0}/>
            <img src={mmhc_1}/>
            <video controls src={mmhc_16} type="video/mp4"/>
      
            <img src={mmhc_3}/>
            <img src={mmhc_4}/>
            <img src={mmhc_5}/>
            <video controls src={mmhc_19} type="video/mp4"/>
            <img src={mmhc_6}/>
            <img src={mmhc_7}/>
            <video controls src={mmhc_17} type="video/mp4"/>
            <img src={mmhc_8}/>
            <img src={mmhc_9}/>
            <img src={mmhc_10}/>
            <video controls src={mmhc_11} type="video/mp4"/>
            <img src={mmhc_12}/>
            <img src={mmhc_13}/>
            <img src={mmhc_14}/>
            <video controls src={mmhc_18} type="video/mp4"/>
            <img src={mmhc_15}/>



            </div>       
        </div>




        <Footer/>


    </div>
  )
}

export default Mmhc