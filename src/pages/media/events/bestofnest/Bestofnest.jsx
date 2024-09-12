import React from 'react'
import { Navbar } from '../../../../components'
import { Footer } from '../../../../components'
import nest_1 from "../../../../assets/bestofnest/nest_1.mp4"
import nest_2 from "../../../../assets/bestofnest/nest_2.png"
import nest_3 from "../../../../assets/bestofnest/nest_3.png"
import nest_4 from "../../../../assets/bestofnest/nest_4.mp4"
import nest_5 from "../../../../assets/bestofnest/nest_5.png"

import "./bestofnest.css"
const Bestofnest = () => {
  return (
    <div>
        <Navbar/>
        <div className='bestofnest-main'>
            <h1 className='bestofnest-title'>BEST OF THE NEST</h1>
            <div className='bestofnest-album'>
                <video controls src={nest_1} type="video/mp4"/>
                <img src={nest_2}/>    
                <img src={nest_3}/> 
                <video controls src={nest_4} type="video/mp4"/>
                <img src={nest_5}/> 
            </div>       
        </div>




        <Footer/>

    </div>
  )
}

export default Bestofnest