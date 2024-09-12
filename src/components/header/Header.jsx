import React from 'react'
import { Link} from "react-router-dom"
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
    <div className="MuaythaiHeader">
      <div className="Muaythai-text">
        <h1 className="Muaythai-words">
          AMS Muaythai at UBC was founded in 2022 
          with the goal of promoting physical and 
          mental health throughout the UBC community.
          </h1>
      </div>
      <div className="Muaythai-button">
      <Link to= "/Free-Trial">
        <button type="button" className="free" >Try a Free Class!</button>
        </Link>
        <Link to= "/Join-Us">
        <button type="button" className="join">Become a Member!</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Header