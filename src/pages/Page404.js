import React from 'react'
import './Page404.css'
import error from '../assets/error404.gif'

function Page404() {
  return (
    <div className='Page404'>
      <img className='image-404' src={error} alt='Eror 404'></img>
    </div>
  )
}

export default Page404