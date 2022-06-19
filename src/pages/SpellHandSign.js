import React, { useState, useEffect } from 'react'
import './SpellHandSign.css'

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

function SpellHandSign() {

  const asl = [
    {name: 'A', image: A},
    {name: 'B', image: B},
    {name: 'C', image: C},
    {name: 'D', image: D},
    {name: 'E', image: E},
    {name: 'F', image: F},
    {name: 'G', image: G},
    {name: 'H', image: H},
    {name: 'I', image: I},
    {name: 'J', image: J},
    {name: 'K', image: K},
    {name: 'L', image: L},
    {name: 'M', image: M},
    {name: 'N', image: N},
    {name: 'O', image: O},
    {name: 'P', image: P},
    {name: 'Q', image: Q},
    {name: 'R', image: R},
    {name: 'S', image: S},
    {name: 'T', image: T},
    {name: 'U', image: U},
    {name: 'V', image: V},
    {name: 'W', image: W},
    {name: 'X', image: X},
    {name: 'Y', image: Y},
    {name: 'Z', image: Z},
  ]

  const easyWords = [
    "LNU",
    "IT",
    "OOP",
    "ASL",
    "DOG",
    "CAT",
    "FOX",
    "OX",
    "HEN",
    "DAY",
    "SUM",
    "ASH",
    "JAM",
    "MAX",
    "BIRD",
  ]

  const mediumWords = [
    "BSIT",
    "DATA",
    "BETA",
    "SIGN",
    "EXAM",
    "BOX",
    "BACK",
    "LATE",
    "DATE",
    "FATE",
    "WORD",
    "SHIRT",
    "GRID",
    "FLEX",
  ]

  const hardWords = [
    "CAPSTONE",
    "PROGRAM",
    "SOMETHING",
    "SAMPLE",
    "CAMERA",
    "INTEGRITY",
    "EXCELLENCE",
    "QUALITY",
    "LANGUAGE",
    "PANCIT",
    "CANTON",
    "NOODLES",
    "LAPTOP",
    "DESKTOP",
    "CELLPHONE",
  ]

  const [gameStart, setGameStart] = useState(false);

  const [gameEnded, setGameEnded] = useState(false);

  const [imagesArr, setImagesArr] = useState([]);

  const [gameWord, setGameWord] = useState(null);

  const [aslArray, setAslArray] = useState(null);

  const [inputWord, setInputWord] = useState('');

  const [asl_index, setAsl_index] = useState(0);

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const [difficulty, setDifficulty] = useState('Easy');

  const [aslArrayLength, setAslArrayLength] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function submitBtn(){
    if(gameStart && inputWord){
      if(gameWord === inputWord.toUpperCase()){
        setAsl_index(asl_index+1)
        setCorrect(correct+1)
        setInputWord('')
      } else {
        setAsl_index(asl_index+1)
        setWrong(wrong+1)
        setInputWord('')
      }
    }
  }

  function handleInputChange(event) {
    setInputWord(event.target.value);
  }

  function startGame(){
    resetGame()
    setGameStart(true)

    if(difficulty === 'Easy'){
      setAslArray(getAslArray(easyWords, 5))
      setMinutes(1)
      setSeconds(30)
    }
    if(difficulty === 'Medium'){
      setAslArray(getAslArray(mediumWords, 10))
      setMinutes(0)
      setSeconds(59)
    }
    if(difficulty === 'Hard'){
      setAslArray(getAslArray(hardWords, 10))
      setMinutes(0)
      setSeconds(30)
    }

  }

  function resetGame(){
    setGameStart(false)
    setImagesArr([])
    setGameWord(null)
    setAsl_index(0)
    setGameEnded(false)
    setInputWord('')

    setCorrect(0)
    setWrong(0)

    setMinutes(0)
    setSeconds(0)
  }

  function getAslArray(arr, num){
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  function changeDifficulty(e){
    setDifficulty(e.target.value)
    resetGame()
  }

  function getImages(arr){
    
    if(arr) {
      const imgObg = []

    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < asl.length; j++){
        if(arr[i] === asl[j].name){
          imgObg.push(asl[j].image)
        }
      }
    }
    
    return imgObg
    }
  }

  function rederImages(){
    const images = []
    imagesArr.map((item, key) => {
      images.push(<img key={key} src={item}></img>)
    })

    return images
  }

  function handleKeyPress(event){
    if(event.key === 'Enter'){
      submitBtn()
    }
  }

  //run if gameStart and asl_index change
  useEffect(() => {
    if(gameStart && aslArray){
      console.log(aslArray)
      setGameWord(aslArray[asl_index])
    }
  }, [gameStart, asl_index, gameWord]);

  //run if the gameWord change
  useEffect(() => {
      if(gameWord){
        setImagesArr(getImages(gameWord))
      }
  }, [gameWord]);

  useEffect(() => {
    if(aslArray){
      setAslArrayLength(aslArray.length)
    }
  }, [aslArray]);

  //game ended
  useEffect(() => {
    const total = correct + wrong
    if(asl_index){
      if(aslArrayLength === total){
        setAsl_index(0)
        setGameEnded(true)
        setGameStart(false)
        setImagesArr([])
      }
    }
  }, [asl_index]);

  //Countdown Timer
  useEffect( () => {
    if(gameStart) {
      const intervalId = setInterval(() => {
        if(seconds === 0){
          setSeconds(59)
        }
        setSeconds(seconds-1)
        if(seconds === 0){
          setSeconds(59)
        }

        //minutes
        if(minutes !== 0 && seconds === 0){
          setMinutes(minutes-1)
        }

        //stop the timer
        if(minutes === 0 && seconds === 0){
          clearInterval(intervalId)
          setMinutes(0)
          setSeconds(0)

          setGameStart(false)
          setGameEnded(true)
        }
        
      }, 1000);
      return () => clearInterval(intervalId)
    }
  });

  return (
    <div className='SpellHandSign'>
      <h2>SPELL THE HAND SIGNS</h2>

      <div className='top-controls'>
        <div className='difficulty-container'>
          <span>GAME LEVEL:</span>

          <select onChange={changeDifficulty}>
            <option value='Easy'>EASY</option>
            <option value='Medium'>MEDIUM</option>
            <option value='Hard'>HARD</option>
          </select>
        </div>

        <div className='btn-container'>
          <button onClick={startGame}>START</button>
          <div className='divider'></div>
          <button onClick={resetGame}>RESET</button>
        </div>

        <div className='timer-container'>
          <span>Time:</span>
          <span>{minutes}:{seconds}</span>
        </div>
      </div>

      <div className='asl-img-container'>
        
        <div className='img-container'>
        {rederImages()}
        </div>
        {gameEnded ? <div className='game-ended-container'>
          <span>SPELL HAND SIGN COMPLETE!</span>

          <span>SCORE</span>
          <span>{correct}</span>

          <button onClick={startGame}>NEW GAME</button>
        </div>:""}
      </div>

      {gameStart ? <div className='bottom-controls'>
        <span>Correct: {correct}</span>

        <span>{asl_index+1}/{aslArrayLength}</span>

        <span>Wrong: {wrong}</span>
      </div>:""}

      <div className='input-container'>
        <input type="text" onKeyUp={handleKeyPress} onChange={handleInputChange} value={inputWord} placeholder="Text here..."></input>

        <button onClick={submitBtn}>SUBMIT</button>
      </div>
    </div>
  )
}

export default SpellHandSign