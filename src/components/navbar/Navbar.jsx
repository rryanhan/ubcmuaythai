import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link} from "react-router-dom"
import './navbar.css';
import logo from '../../assets/logo.png';
import line from '../../assets/line.png';

const Menu = () => (
  <>
  <li><Link to= "/">ABOUT US</Link></li>
  <li><Link to= "/Muaythai-Guide">MUAYTHAI GUIDE</Link></li>
  <li><Link to= "/Schedule-and-Fees">SCHEDULE & FEES</Link></li>
  <li><Link to= "/Free-Trial">FREE TRIAL!</Link></li>
  <li><Link to= "/Join-Us">JOIN US!</Link></li>
  <li><Link to= "/Media">MEDIA</Link></li>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="Muaythai__navbar">
      <div className="Muaythai__navbar-links">
      <Link to= "/">
        <div className="Muaythai__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        </Link>
        <div className="Muaythai__navbar-links_container">
          <Menu />
        </div>
        <div className="Muaythai__navbar-links_border"></div>
      
      </div>
      <div className="Muaythai__navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="Muaythai__navbar-menu_container scale-up-center">
        <div className="Muaythai__navbar-menu_container-links">
          <Menu />
        </div>

        </div>
      )}

      </div>
    </div>
  )
}

export default Navbar