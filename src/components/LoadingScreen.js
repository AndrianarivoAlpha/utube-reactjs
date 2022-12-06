import React from 'react'
import { RotatingTriangles } from 'react-loader-spinner'

const LoadingScreen = () => {
  return (
    <div className='loading-container'>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
      <h4>LOADING...</h4>
    </div>
  )
}

export default LoadingScreen