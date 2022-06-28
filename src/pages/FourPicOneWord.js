import React, { useState, useEffect } from 'react'
import './FourPicOneWord.css'
import {IoMdSend, IoMdBackspace} from 'react-icons/io'
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

import A from '../asl-img/A.png'
import B from '../asl-img/B.png'
import C from '../asl-img/C.png'
import D from '../asl-img/D.png'
import E from '../asl-img/E.png'
import F from '../asl-img/F.png'
import G from '../asl-img/G.png'
import H from '../asl-img/H.png'
import I from '../asl-img/I.png'
import J from '../asl-img/J.png'
import K from '../asl-img/K.png'
import L from '../asl-img/L.png'
import M from '../asl-img/M.png'
import N from '../asl-img/N.png'
import O from '../asl-img/O.png'
import P from '../asl-img/P.png'
import Q from '../asl-img/Q.png'
import R from '../asl-img/R.png'
import S from '../asl-img/S.png'
import T from '../asl-img/T.png'
import U from '../asl-img/U.png'
import V from '../asl-img/V.png'
import W from '../asl-img/W.png'
import X from '../asl-img/X.png'
import Y from '../asl-img/Y.png'
import Z from '../asl-img/Z.png'

function FourPicOneWord() {

  const aslImages = [
    {value: 'A', image: A},
    {value: 'B', image: B},
    {value: 'C', image: C},
    {value: 'D', image: D},
    {value: 'E', image: E},
    {value: 'F', image: F},
    {value: 'G', image: G},
    {value: 'H', image: H},
    {value: 'I', image: I},
    {value: 'J', image: J},
    {value: 'K', image: K},
    {value: 'L', image: L},
    {value: 'M', image: M},
    {value: 'N', image: N},
    {value: 'O', image: O},
    {value: 'P', image: P},
    {value: 'Q', image: Q},
    {value: 'R', image: R},
    {value: 'S', image: S},
    {value: 'T', image: T},
    {value: 'U', image: U},
    {value: 'V', image: V},
    {value: 'W', image: W},
    {value: 'X', image: X},
    {value: 'Y', image: Y},
    {value: 'Z', image: Z},
  ]

  // const easyWords = [
  //   {value: 'BLUE', image: BLUE},
  //   {value: 'CALL', image: CALL},
  //   {value: 'CODE', image: CODE},
  //   {value: 'DATA', image: DATA},
  //   {value: 'HERO', image: HERO},
  //   {value: 'LOOP', image: LOOP},
  //   {value: 'PULL', image: PULL},
  //   {value: 'RING', image: RING},
  //   {value: 'SIGN', image: SIGN},
  //   {value: 'STAR', image: STAR},
  // ]

  const easyWords = [
    {value: ['B','L','U','E'], image: BLUE},
    {value: ['C','A','L','L'], image: CALL},
    {value: ['C','O','D','E'], image: CODE},
    {value: ['D','A','T','A'], image: DATA},
    {value: ['H','E','R','O'], image: HERO},
    {value: ['L','O','O','P'], image: LOOP},
    {value: ['P','U','L','L'], image: PULL},
    {value: ['R','I','N','G'], image: RING},
    {value: ['S','I','G','N'], image: SIGN},
    {value: ['S','T','A','R'], image: STAR},
  ]

  const mediumWords = [
    {value: 'BOARD', image: BOARD},
    {value: 'ERROR', image: ERROR},
    {value: 'FLOAT', image: FLOAT},
    {value: 'LETTER', image: LETTER},
    {value: 'MONEY', image: MONEY},
    {value: 'MOUSE', image: MOUSE},
    {value: 'ORANGE', image: ORANGE},
    {value: 'PARTY', image: PARTY},
    {value: 'PHONE', image: PHONE},
    {value: 'POWER', image: POWER},
    {value: 'SHORT', image: SHORT},
    {value: 'STAND', image: STAND},
    {value: 'STATUE', image: STATUE},
    {value: 'STORE', image: STORE},
    {value: 'VIRUS', image: VIRUS},
  ]

  const hardWords = [
    {value: 'ACTRESS', image: ACTRESS},
    {value: 'BALANCE', image: BALANCE},
    {value: 'COMPILE', image: COMPILE},
    {value: 'CONCERT', image: CONCERT},
    {value: 'CONTROL', image: CONTROL},
    {value: 'FORTUNE', image: FORTUNE},
    {value: 'HOLIDAY', image: HOLIDAY},
    {value: 'MONITOR', image: MONITOR},
    {value: 'PACKAGE', image: PACKAGE},
    {value: 'PAINTER', image: PAINTER},
    {value: 'PERFECT', image: PERFECT},
    {value: 'PICTURE', image: PICTURE},
    {value: 'PROGRAM', image: PROGRAM},
    {value: 'RECEIVE', image: RECEIVE},
    {value: 'SOCIETY', image: SOCIETY},
    {value: 'THOUGHT', image: THOUGHT},
    {value: 'VEHICLE', image: VEHICLE},
    {value: 'WEBPAGE', image: WEBPAGE},
  ]

  const [lives, setLives] = useState([0, 1, 2, 3, 4]);

  const [gameStart, setGameStart] = useState(false);

  const [imagesArr, setImagesArr] = useState([]);

  const [arrIndex, setArrIndex] = useState(0);

  const [choicesArr, setChoicesArr] = useState([]);

  const [answerArr, setAnswerArr] = useState([]);

  const [difficulty, setDifficulty] = useState('Easy');

  function renderLives(){
    const myLives = []
    lives.map((item, key) => {
      myLives.push(<div key={key} className='heart'></div>)
    })
    return myLives
  }
  
  function reducLives(){
    const temp = [...lives]

    temp.splice(lives.length-1 ,1)
    setLives(temp)
  }

  function startGame(){
    resetGame()
    setGameStart(true)
    setImagesArr(getRandomItems(easyWords, 5))
  }

  function resetGame(){
    setGameStart(false)
    setArrIndex(0)
    setImagesArr([])
    setChoicesArr([])
  }


  function renderImage(){
    if(imagesArr.length !== 0){
      return(
        <img src={imagesArr[arrIndex].image}></img>
      )
    }
  }

  function nextIndex(){
    if(gameStart && arrIndex !== imagesArr.length-1){
      setArrIndex(arrIndex+1)
    }
  }

  function getChoices(){
    const arr = [...imagesArr[arrIndex].value]
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for(let i = arr.length; i < 10; i++){
      arr.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    }

    return getImages(shuffle(arr))
  }

  function getImages(arr){
    const imgArr = []

    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < aslImages.length; j++){
        if(arr[i] === aslImages[j].value){
          imgArr.push(aslImages[j])
        }
      }
    }
    return imgArr
  }

  function shuffle(arr){
    const arrCopy = [...arr]
    const items = []

    for(let i = 0; i < arr.length; i++){
      let randomIndex = [Math.floor(Math.random()*arrCopy.length)]
      items.push(arrCopy[randomIndex])
      arrCopy.splice(randomIndex, 1)
    }

    return items
  }

  function getRandomItems(arr, num){
    const arrCopy = [...arr]

    const items = []

    for(let i = 0; i < num; i++){
      let randomIndex = [Math.floor(Math.random()*arrCopy.length)]
      items.push(arrCopy[randomIndex])
      arrCopy.splice(randomIndex, 1)
    }

    return items
  }

  function renderChoicesImages(){
    if(choicesArr.length !== 0){
      const choices = []

      choicesArr.map((item, key) => {
        choices.push(
          <div className='choices-container' key={key}>
            <button value={item.value}>
              <img src={item.image}></img>
            </button>
          </div>
        )
      })

      return choices
    }
  }

  useEffect(() => {
    if(choicesArr.length !== 0){
      console.log(choicesArr)
    }
  }, [choicesArr]);

  useEffect(() => {
    if(imagesArr.length !== 0){
      console.log(imagesArr)
      setChoicesArr(getChoices)
    }
  }, [imagesArr]);

  useEffect(() => {
    if(gameStart){
      setChoicesArr(getChoices)
    }
  }, [arrIndex]);

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
          <button onClick={startGame}>START</button>
          <div className='divider'></div>
          <button onClick={resetGame}>RESET</button>
        </div>
        
        <div className='lives-container'>
          {renderLives()}
        </div>
      </div>
      
      <div className='picture-container'>
          {renderImage()}
      </div>

      <div className='bottom-indicator'>
        <span>Correct: 0</span>

        <span>1/5</span>

        <span>Wrong: 0</span>
      </div>

      <div className='bottom-controls'>
        <button>
          <IoMdBackspace className='btn-icon-backspace'/>
        </button>

        <div className='answer-container'>
          test
        </div>

        <button onClick={nextIndex}>
          <IoMdSend className='btn-icon-submit'/>
        </button>
      </div>

      <div className='asl-button-container'>
        {renderChoicesImages()}
      </div>
    </div>
  )
}

export default FourPicOneWord