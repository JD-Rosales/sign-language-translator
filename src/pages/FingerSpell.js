import React from 'react'
import './FingerSpell.css'

function FingerSpell() {
  return (
    <div className='FingerSpell'>
      <h2>FINGER SPELL THE WORD</h2>

      <div className='top-controls'>

        <div className='difficulty'>
          <span>GAME LEVEL:</span>

          <select>
            <option value='easy'>EASY</option>
            <option value='medium'>MEDIUM</option>
            <option value='hard'>HARD</option>
          </select>
        </div>
        
        <div className='timer-container'>
          <span>Time:</span>
          <span>30:00.00</span>
        </div>

        <span>Gesture Confidence: 85.90%</span>
      </div>

      <div className='asl-container'>
        
      </div>

      <div className='bottom-text'>
        <span>Correct: 1</span>

        <span>4/10</span>

        <span>Wrong: 3</span>
      </div>

      <div className='bottom-controls'>
        <button>START</button>

        <span>FIRE</span>

        <button>RESTART</button>
      </div>
    </div>
  )
}

export default FingerSpell