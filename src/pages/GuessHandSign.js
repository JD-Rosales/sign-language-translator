import React, { useState, useEffect } from 'react'
import './GuessHandSign.css'

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

function GuessHandSign() {

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

  const [gameStart, setGameStart] = useState(false);

  const [gameEnded, setGameEnded] = useState(false);

  const [asl_index, setAsl_index] = useState(0);

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const [asl_img, setAsl_img] = useState(null);

  const [aslArray, setAslArray] = useState(null);

  const [difficulty, setDifficulty] = useState('Easy');

  const [letter, setLetter] = useState('');

  const defaultMinutes = 0;
  const defaultSeconds = 0;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [aslArrayLength, setAslArrayLength] = useState(0);

  function getAsl(arr, num){
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  function startGame(){
    setGameStart(true)
    setGameEnded(true)
    if(difficulty === 'Easy'){
      setAslArray(getAsl(asl, 5))
      setMinutes(1)
      setSeconds(30)
    }
    if(difficulty === 'Medium'){
      setAslArray(getAsl(asl, 10))
      setMinutes(0)
      setSeconds(59)
    }
    if(difficulty === 'Hard'){
      setAslArray(getAsl(asl, 10))
      setMinutes(0)
      setSeconds(30)
    }
  }

  function resetGame(){
    setGameStart(false)
    setAsl_index(0)
    setAsl_img(null)
    setAslArray(null)
    setLetter('')
    setCorrect(0)
    setWrong(0)
    setGameEnded(false)
    setMinutes(0)
    setSeconds(0)
  }

  function changeDifficulty(e){
    setDifficulty(e.target.value)
    resetGame()
  }

  function nextAsl(){
    setAsl_img(aslArray[asl_index].image)
    if(asl_index < aslArray.length-1){
      setAsl_index(asl_index+1)
    }
  }

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
          setMinutes(defaultMinutes)
          setSeconds(defaultSeconds)

          setGameStart(false)
          setGameEnded(true)
          setAsl_img(null)
          setAslArray(null)
        }
        
      }, 1000);
      return () => clearInterval(intervalId)
    }
  });

  useEffect( () => {
    if(aslArray !== null){
      setAsl_img(aslArray[asl_index].image)
      setAslArrayLength(aslArray.length)
    }
  }, [asl_index, aslArray]);

  //Button Clicked
  useEffect( () => {
    if(aslArray !== null && gameStart === true){
      if(letter === aslArray[asl_index].name){
        console.log("correct!")
        setCorrect(correct+1)
        nextAsl()
      } else {
        console.log("wrong!")
        setWrong(wrong+1)
        nextAsl()
      }
    }
  }, [letter]);


  //Game Ended
  useEffect( () => {
    const scoreSum = correct + wrong
    if(aslArray !== null){
      if(scoreSum === aslArray.length){
        setGameEnded(true)
        setAsl_img(null)
        setAslArray(null)
      }
    }
  }, [correct, wrong]);

  function btnA(){
    setLetter('A')
  }
  function btnB(){
    setLetter('B')
  }
  function btnC(){
    setLetter('C')
  }
  function btnD(){
    setLetter('D')
  }
  function btnE(){
    setLetter('E')
  }
  function btnF(){
    setLetter('F')
  }
  function btnG(){
    setLetter('G')
  }
  function btnH(){
    setLetter('H')
  }
  function btnI(){
    setLetter('I')
  }
  function btnJ(){
    setLetter('J')
  }
  function btnK(){
    setLetter('K')
  }
  function btnL(){
    setLetter('L')
  }
  function btnM(){
    setLetter('M')
  }
  function btnN(){
    setLetter('N')
  }
  function btnO(){
    setLetter('O')
  }
  function btnP(){
    setLetter('P')
  }
  function btnQ(){
    setLetter('Q')
  }
  function btnR(){
    setLetter('R')
  }
  function btnS(){
    setLetter('S')
  }
  function btnT(){
    setLetter('T')
  }
  function btnU(){
    setLetter('U')
  }
  function btnV(){
    setLetter('V')
  }
  function btnW(){
    setLetter('W')
  }
  function btnX(){
    setLetter('X')
  }
  function btnY(){
    setLetter('Y')
  }
  function btnZ(){
    setLetter('Z')
  }

  return (
    <div className='GuessHandSign'>
      <h2>GUESS THE HAND SIGNS</h2>

      <div className='top-controls'>
        <div className='difficulty-container'>
          <span>Game:</span>

          <select onChange={changeDifficulty}>
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

        <div className='timer-container'>
          <span>Time:</span>
          <span>{minutes}:{seconds}</span>
        </div>
      </div>

      <div className='asl-img-container'>
        {asl_img !== null ? <img className='asl-image' src={asl_img} alt='ASL'></img>:""}

        {/* Display Element if the Game Ended */}
        {gameEnded && !asl_img ?<span className='game-over'>GAME OVER!</span>:""}
        {gameEnded && !asl_img ? <span>Score: {correct}/{aslArrayLength}</span>:""}
        {gameEnded && !asl_img ? <button type="button" onClick={startGame}>NEW GAME</button>:""}
      </div>

      <div className='bottom-controls'>
        
        <div className='correct-container'>
          {asl_img ? <span>Correct: {correct}</span>:""}
        </div>
        
        <div  className='total-container'>
          {asl_img ? <span>{asl_index+1}/{aslArrayLength}</span>:""}
        </div>

        <div className='wrong-container'>
          {asl_img ? <span>Wrong: {wrong}</span>:""}
        </div>
      </div>

      <div className='btn-container'>
        <button type="button" onClick={btnA}>A</button>
        <button type="button" onClick={btnB}>B</button>
        <button type="button" onClick={btnC}>C</button>
        <button type="button" onClick={btnD}>D</button>
        <button type="button" onClick={btnE}>E</button>
        <button type="button" onClick={btnF}>F</button>
        <button type="button" onClick={btnG}>G</button>
        <button type="button" onClick={btnH}>H</button>
        <button type="button" onClick={btnI}>I</button>
        <button type="button" onClick={btnJ}>J</button>
        <button type="button" onClick={btnK}>K</button>
        <button type="button" onClick={btnL}>L</button>
        <button type="button" onClick={btnM}>M</button>
        <button type="button" onClick={btnN}>N</button>
        <button type="button" onClick={btnO}>O</button>
        <button type="button" onClick={btnP}>P</button>
        <button type="button" onClick={btnQ}>Q</button>
        <button type="button" onClick={btnR}>R</button>
        <button type="button" onClick={btnS}>S</button>
        <button type="button" onClick={btnT}>T</button>
        <button type="button" onClick={btnU}>U</button>
        <button type="button" onClick={btnV}>V</button>
        <button type="button" onClick={btnW}>W</button>
        <button type="button" onClick={btnX}>X</button>
        <button type="button" onClick={btnY}>Y</button>
        <button type="button" onClick={btnZ}>Z</button>
      </div>

    </div>
  )
}

export default GuessHandSign