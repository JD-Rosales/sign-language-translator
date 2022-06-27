import React, { useState, useEffect } from 'react'
import './FourPicOneWord.css'
import BLUE from '../assets/word-images/easy/BLUE.png'
import CALL from '../assets/word-images/easy/CALL.png'
import CODE from '../assets/word-images/easy/CODE.png'
import DATA from '../assets/word-images/easy/DATA.png'
import HERO from '../assets/word-images/easy/HERO.png'
import LOOP from '../assets/word-images/easy/LOOP.png'
import PULL from '../assets/word-images/easy/PULL.png'
import RING from '../assets/word-images/easy/RING.png'
import SIGN from '../assets/word-images/easy/SIGN.png'
import STAR from '../assets/word-images/easy/STAR.png'
import BOARD from '../assets/word-images/medium/BOARD.png'
import ERROR from '../assets/word-images/medium/ERROR.png'
import FLOAT from '../assets/word-images/medium/FLOAT.png'
import LETTER from '../assets/word-images/medium/LETTER.png'
import MONEY from '../assets/word-images/medium/MONEY.png'
import MOUSE from '../assets/word-images/medium/MOUSE.png'
import ORANGE from '../assets/word-images/medium/ORANGE.png'
import PARTY from '../assets/word-images/medium/PARTY.png'
import PHONE from '../assets/word-images/medium/PHONE.png'
import POWER from '../assets/word-images/medium/POWER.png'
import SHORT from '../assets/word-images/medium/SHORT.png'
import STAND from '../assets/word-images/medium/STAND.png'
import STATUE from '../assets/word-images/medium/STATUE.png'
import STORE from '../assets/word-images/medium/STORE.png'
import VIRUS from '../assets/word-images/medium/VIRUS.png'
import ACTRESS from '../assets/word-images/hard/ACTRESS.png'
import BALANCE from '../assets/word-images/hard/BALANCE.png'
import COMPILE from '../assets/word-images/hard/COMPILE.png'
import CONCERT from '../assets/word-images/hard/CONCERT.png'
import CONTROL from '../assets/word-images/hard/CONTROL.png'
import FORTUNE from '../assets/word-images/hard/FORTUNE.png'
import HOLIDAY from '../assets/word-images/hard/HOLIDAY.png'
import MONITOR from '../assets/word-images/hard/MONITOR.png'
import PACKAGE from '../assets/word-images/hard/PACKAGE.png'
import PAINTER from '../assets/word-images/hard/PAINTER.png'
import PERFECT from '../assets/word-images/hard/PERFECT.png'
import PICTURE from '../assets/word-images/hard/PICTURE.png'
import PROGRAM from '../assets/word-images/hard/PROGRAM.png'
import RECEIVE from '../assets/word-images/hard/RECEIVE.png'
import SOCIETY from '../assets/word-images/hard/SOCIETY.png'
import THOUGHT from '../assets/word-images/hard/THOUGHT.png'
import VEHICLE from '../assets/word-images/hard/VEHICLE.png'
import WEBPAGE from '../assets/word-images/hard/WEBPAGE.png'


function FourPicOneWord() {

  const easyWords = [
    {name: 'BLUE', image: BLUE},
    {name: 'CALL', image: CALL},
    {name: 'CODE', image: CODE},
    {name: 'DATA', image: DATA},
    {name: 'HERO', image: HERO},
    {name: 'LOOP', image: LOOP},
    {name: 'PULL', image: PULL},
    {name: 'RING', image: RING},
    {name: 'SIGN', image: SIGN},
    {name: 'STAR', image: STAR},
  ]

  const mediumWords = [
    {name: 'BOARD', image: BOARD},
    {name: 'ERROR', image: ERROR},
    {name: 'FLOAT', image: FLOAT},
    {name: 'LETTER', image: LETTER},
    {name: 'MONEY', image: MONEY},
    {name: 'MOUSE', image: MOUSE},
    {name: 'ORANGE', image: ORANGE},
    {name: 'PARTY', image: PARTY},
    {name: 'PHONE', image: PHONE},
    {name: 'POWER', image: POWER},
    {name: 'SHORT', image: SHORT},
    {name: 'STAND', image: STAND},
    {name: 'STATUE', image: STATUE},
    {name: 'STORE', image: STORE},
    {name: 'VIRUS', image: VIRUS},
  ]

  const hardWords = [
    {name: 'ACTRESS', image: ACTRESS},
    {name: 'BALANCE', image: BALANCE},
    {name: 'COMPILE', image: COMPILE},
    {name: 'CONCERT', image: CONCERT},
    {name: 'CONTROL', image: CONTROL},
    {name: 'FORTUNE', image: FORTUNE},
    {name: 'HOLIDAY', image: HOLIDAY},
    {name: 'MONITOR', image: MONITOR},
    {name: 'PACKAGE', image: PACKAGE},
    {name: 'PAINTER', image: PAINTER},
    {name: 'PERFECT', image: PERFECT},
    {name: 'PICTURE', image: PICTURE},
    {name: 'PROGRAM', image: PROGRAM},
    {name: 'RECEIVE', image: RECEIVE},
    {name: 'SOCIETY', image: SOCIETY},
    {name: 'THOUGHT', image: THOUGHT},
    {name: 'VEHICLE', image: VEHICLE},
    {name: 'WEBPAGE', image: WEBPAGE},
  ]

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
      <h2>4 PICS 1 WORD</h2>
      <div className='top-controls'>
        <div className='difficulty-container'>
          <span>GAME LEVEL:</span>

          <select>
            <option value='Easy'>Easy</option>
            <option value='Medium'>Medium</option>
            <option value='Hard'>Hard</option>
          </select>
        </div>

        <div className='btn-container'>
          <button >START</button>
          <div className='divider'></div>
          <button >RESET</button>
        </div>
        
        <div className='lives-container'>
          {renderLives()}
        </div>
      </div>
      
      <div className='picture-container'>
          <img src={BLUE} alt='4 PIC ONE WORD'></img>
      </div>

      <div className='bottom-indicator'>
        <span>Correct: 0</span>

        <span>1/5</span>

        <span>Wrong: 0</span>
      </div>

      <div className='bottom-controls'>
        <button>X</button>

        <div className='answer-container'>
          test
        </div>

        <button>Y</button>
      </div>

      <div className='asl-button-container'>
        <span>test</span>
      </div>
    </div>
  )
}

export default FourPicOneWord