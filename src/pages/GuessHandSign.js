import React from 'react'
import './GuessHandSign.css'

function GuessHandSign() {
  return (
    <div className='GuessHandSign'>
      <h2>GUESS THE HAND SIGNS</h2>

      <div className='top-controls'>
        <span>GAME LEVEL:</span>

          <select>
            <option value='easy'>EASY</option>
            <option value='medium'>MEDIUM</option>
            <option value='hard'>HARD</option>
          </select>

        <button>START</button>

        <div className='timer-container'>
          <span>Time:</span>
          <span>30:00.00</span>
        </div>
      </div>

      <div className='asl-img-container'>
        
      </div>

      <div className='bottom-controls'>
        <span>Correct: 1</span>

        <span>4/10</span>

        <span>Wrong: 3</span>
      </div>

      <div className='input-container'>
        <input type="text" placeholder="Text here..."></input>

        <button>SUBMIT</button>
      </div>
    </div>
  )
}

export default GuessHandSign