import React, { useState, useEffect } from 'react'
import './FourPicOneWord.css'

function FourPicOneWord() {

  const [lives, setLives] = useState([0, 1, 2, 3, 4]);

  function renderLives(){
    const myLives = []
    lives.map((item, key) => {
      myLives.push(<div key={key} className='heart'></div>)
    })
    return myLives
  }
  
  function reducLives() {
    const temp = [...lives]

    temp.splice(lives.length-1 ,1)
    setLives(temp)
  }
  return (
    <div className='FourPicOneWord'>
      <div className='top-controls'>
        <div className='difficulty-container'>
          <span>GAME LEVEL:</span>

          <select>
            <option value='Easy'>Easy</option>
            <option value='Medium'>Medium</option>
            <option value='Hard'>Hard</option>
          </select>
        </div>
        
        <div className='lives-container'>
          {/* <div className='heart'
          style={{
            backgroundColor: color ? 'gray' : 'red',
          }}>

          </div> */}
          {renderLives()}
        </div>
      </div>
      
      <div className='picture-container'>

      </div>
      <button onClick={reducLives}>reduce lives</button>
    </div>
  )
}

export default FourPicOneWord