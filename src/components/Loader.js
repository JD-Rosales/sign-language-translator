import React from 'react'
import './Loader.css'
import loader from '../assets/loader.gif'

function Loader() {
  const facts = [
    "Did you know that different countries have their own versions of sign language?",
    "Did you know that many deaf people have 'name signs' that can be compared to a nickname?",
    "Did you know that the first person credited with the creation of a formal sign language for the hearing impaired was Pedro Ponce de León, a 16th-century Spanish Benedictine monk?",
    "Did you know that there are more than 300 different sign languages in use around the world?",
    "Did you know that Filipino Sign Language, according to the 2005 edition of Ethnologue, is used by at least 100,000 people and is reported to be very similar to American Sign Language (ASL)?",
  ]

  const tips = [
    "Make sure the camera is enabled when using the Sign Language Translator",
    "Good lighting boosts gesture confidence when using the system",
    "It's much easier to learn sign language if you're having fun. Take part in a game!",
    "The more you train, the more proficient you will become.",
    "Familiarize. Don't memorize.",
  ]

  function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex]
    return item
  }
  
  return (
    <div className='Loader'>
      <img className='loader-image' src={loader} alt='loader'></img>
      <span className='models'>Loading Hand Models</span>
      <span className='facts'>{getRandomItem(facts)}</span>

      <span className='tips'>Tip: {getRandomItem(tips)}</span>
    </div>
  )
}

export default Loader