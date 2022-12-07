import { Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import LogoImage from '../images/utube-logo-text.png';

const Logo = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: "10px",
        marginBottom: "30px"
      }}>
      <Link to='/' >
        <img src={LogoImage} alt="" height="30" />
      </Link>
    </Grid>

  )
}

export default Logo