import React from 'react'
import './Loader.css'
import { ThreeDots	 } from  'react-loader-spinner'

function Loader() {
  return (
    <div className='Loader'>
      <ThreeDots	
        height="100"
        width="100"
        color='white'
        ariaLabel='loading'
      />
      <h1>Loading Hand Models</h1>
    </div>
  )
}

export default Loader