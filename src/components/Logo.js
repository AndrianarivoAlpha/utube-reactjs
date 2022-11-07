import React from 'react'
import { Link } from 'react-router-dom';
import LogoImage from '../images/utube-logo-text.png';

const Logo = () => {
  return (
    <Link to='/' style={{textalign: "center", alignContent: "center"}}>
      <img src={LogoImage} alt="" height="40"/>
    </Link>
  )
}

export default Logo