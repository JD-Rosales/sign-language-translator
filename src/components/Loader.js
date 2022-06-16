import React from 'react'
import './Loader.css'
import loader from '../assets/loader.gif'

function Loader() {
  const facts = [
    "Did you know that different countries have their own versions of sign language?",
    "Did you know that different countries have their own versions of sign language?2",
    "Did you know that different countries have their own versions of sign language?3",
    "Did you know that different countries have their own versions of sign language?4",
    "Did you know that different countries have their own versions of sign language?5",
  ]

  const tips = [
    "Make sure the camera is enabled when using the Sign Language Translator",
    "Make sure the camera is enabled when using the Sign Language Translator2",
    "Make sure the camera is enabled when using the Sign Language Translator3",
    "Make sure the camera is enabled when using the Sign Language Translator4",
    "Make sure the camera is enabled when using the Sign Language Translator5",
  ]

  function getRandomFacts(){
    const randomIndex = Math.floor(Math.random() * facts.length);
    const item = facts[randomIndex]
    return item
  }

  function getRandomTips(){
    const randomIndex = Math.floor(Math.random() * tips.length);
    const item = tips[randomIndex]
    return item
  }
  
  return (
    <div className='Loader'>
      <img className='loader-image' src={loader} alt='loader'></img>
      <span className='models'>Loading Hand Models</span>
      <span className='facts'>{getRandomFacts()}</span>

      <span className='tips'>Tip: {getRandomTips()}</span>
    </div>
  )
}

export default Loader