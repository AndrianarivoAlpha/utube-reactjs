import React from 'react';
import Twitter from '../images/Twitter.png'
import Telegram from '../images/Telegram.png'
import Facebook from '../images/Facebook.png'
import { Typography } from '@mui/material';

const Footer = () =>
{
  return (
    <div className='footer-container'>
      <Typography>
        Follow us on social media!
      </Typography>
      <div className="social-media">
        <a href="https://t.me/allpharv" target="_blank" rel="noopener noreferrer">
          <img src={ Telegram } alt="telegram icon" className="social-media-icon" />
        </a>
        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={ Twitter } alt="twitter icon" className="social-media-icon" />
        </a>
        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={ Facebook } alt="facebook icon" className="social-media-icon" />
        </a>
      </div>
    </div>
  )
}

export default Footer