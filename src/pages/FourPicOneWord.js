import React, { useState, useEffect } from 'react'
import './FourPicOneWord.css'
import {IoMdSend, IoMdBackspace} from 'react-icons/io'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
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
    {value: ['B','O','A','R','D'], image: BOARD},
    {value: ['E','R','R','O','R'], image: ERROR},
    {value: ['F','L','O','A','T'], image: FLOAT},
    {value: ['L','E','T','T','E','R'], image: LETTER},
    {value: ['M','O','N','E','Y'], image: MONEY},
    {value: ['M','O','U','S','E'], image: MOUSE},
    {value: ['O','R','A','N','G','E'], image: ORANGE},
    {value: ['P','A','RT','Y'], image: PARTY},
    {value: ['P','H','O','N','E'], image: PHONE},
    {value: ['P','O','W','E','R'], image: POWER},
    {value: ['S','H','O','R','T'], image: SHORT},
    {value: ['S','T','A','N','D'], image: STAND},
    {value: ['S','T','A','T','U','E'], image: STATUE},
    {value: ['S','T','O','R','E'], image: STORE},
    {value: ['V','I','R','U','S'], image: VIRUS},
  ]

  const hardWords = [
    {value: ['A','C','T','R','E','S','S'], image: ACTRESS},
    {value: ['B','A','L','A','N','CE'], image: BALANCE},
    {value: ['C','O','M','P','I','L','E'], image: COMPILE},
    {value: ['C','O','N','C','E','R','T'], image: CONCERT},
    {value: ['C','O','N','T','R','O','L'], image: CONTROL},
    {value: ['F','O','R','T','U','N','E'], image: FORTUNE},
    {value: ['H','O','L','I','D','A','Y'], image: HOLIDAY},
    {value: ['M','O','N','I','T','O','R'], image: MONITOR},
    {value: ['P','A','C','K','A','G','E'], image: PACKAGE},
    {value: ['P','A','I','N','T','E','R'], image: PAINTER},
    {value: ['P','E','R','F','E','C','T'], image: PERFECT},
    {value: ['P','I','C','T','U','R','E'], image: PICTURE},
    {value: ['P','R','O','G','R','A','M'], image: PROGRAM},
    {value: ['R','E','C','E','I','V','E'], image: RECEIVE},
    {value: ['S','O','C','I','E','T','Y'], image: SOCIETY},
    {value: ['T','H','O','U','G','H','T'], image: THOUGHT},
    {value: ['V','E','H','I','C','L','E'], image: VEHICLE},
    {value: ['W','E','B','P','A','G','E'], image: WEBPAGE},
  ]

  const [gameStart, setGameStart] = useState(false);

  const [gameEnded, setGameEnded] = useState(false);

  const [imagesArr, setImagesArr] = useState([]);

  const [arrIndex, setArrIndex] = useState(0);

  const [choicesArr, setChoicesArr] = useState([]);

  const [answerArr, setAnswerArr] = useState([]);
  const [answerIndexArr, setAnswerIndexArr] = useState([]);

  const [blankAnswerArr, setBlankAnswerArr] = useState([]);

  const [answerImageArr, setAnswerImageArr] = useState([]);

  const [difficulty, setDifficulty] = useState('Easy');

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const [remainingLives, setRemainingLives] = useState([]);
  const [lostLives, setLostLives] = useState([]);

  function startGame(){
    resetGame()
    setGameStart(true)
    if(difficulty === 'Easy'){
      setImagesArr(getRandomItems(easyWords, 5))
    }
    if(difficulty === 'Medium'){
      setImagesArr(getRandomItems(mediumWords, 10))
    }
    if(difficulty === 'Hard'){
      setImagesArr(getRandomItems(hardWords, 15))
    }
  }

  function resetGame(){
    setGameStart(false)
    setArrIndex(0)
    setImagesArr([])
    setChoicesArr([])
    setAnswerArr([])
    setAnswerIndexArr([])
    setAnswerImageArr([])
    setCorrect(0)
    setWrong(0)
    setRemainingLives([])
    setLostLives([])
    setBlankAnswerArr([])
    setGameEnded(false)
  }

  function changeDifficulty(e){
    setDifficulty(e.target.value)
    resetGame()
  }

  function renderImage(){
    if(imagesArr.length !== 0){
      return(
        <img src={imagesArr[arrIndex].image}></img>
      )
    }
  }

  function submitAnswer(){
    if(gameStart && answerArr.length === imagesArr[arrIndex].value.length && arrIndex !== imagesArr.length){
      if(JSON.stringify(imagesArr[arrIndex].value) === JSON.stringify(answerArr)){
        setCorrect(correct+1)
        setAnswerArr([])
        setAnswerIndexArr([])
        setAnswerImageArr([])

        //only increment arrIndex if the length of the imageArr is less to avoid undefine error 
        if(arrIndex < imagesArr.length-1){
          setArrIndex(arrIndex+1)
        }
      } else {
        setWrong(wrong+1)
        setAnswerArr([])
        setAnswerIndexArr([])
        setAnswerImageArr([])

        reduceLives()
        if(arrIndex < imagesArr.length-1){
          setArrIndex(arrIndex+1)
        }
      }
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

  function renderChoicesImages(arr){
    if(arr.length !== 0){
      const choices = []

      arr.map((item, key) => {
        choices.push(
            <button key={key} value={item.value} onClick={event => handleBtnChoices(event, key)}>
              <img src={item.image} alt=""></img>
            </button>
        )
      })

      return choices
    }
  }

  function renderAnswerImages(arr){
    if(arr.length !== 0){
      const choices = []

      arr.map((item, key) => {
        choices.push(
            <button key={key} value={item.value}>
              <img src={item.image} alt=""></img>
            </button>
        )
      })

      return choices
    }
  }

  function renderBlankAnswers(arr){
    if(arr.length !== 0){
      const blankAnswer = []

      arr.map((item, key) => {
        blankAnswer.push(
            <div key={key} className='blank-answer'>
            </div>
        )
      })

      return blankAnswer
    }
  }

  function getBlankAnswers(arr){
    for(let i =  0; i < arr.length; i++){
      blankAnswerArr.push('')
    }
  }

  function decrementBlankAnswers(arr){
      const blankAnswerArrCopy = [...arr]
      blankAnswerArrCopy.splice(blankAnswerArrCopy.length-1 ,1)
      setBlankAnswerArr(blankAnswerArrCopy)
  }

  function incrementBlankAnswers(arr){
    const blankAnswerArrCopy = [...arr]
    blankAnswerArrCopy.push('')
    setBlankAnswerArr(blankAnswerArrCopy)
}

  const handleBtnChoices = (event, key) => {
    if(gameStart && event.currentTarget.value !== '' && imagesArr[arrIndex].value.length !== answerArr.length){
      decrementBlankAnswers(blankAnswerArr)
      const prevAnswerArr = [...answerArr]
      const prevAnswerIndexArr = [...answerIndexArr]
      prevAnswerArr.push(event.currentTarget.value)
      setAnswerArr(prevAnswerArr)

      prevAnswerIndexArr.push(key)
      setAnswerIndexArr(prevAnswerIndexArr)

      const choicesCopy = [...choicesArr]
      choicesCopy.splice(key, 1, {value: '', image: null})
      setChoicesArr(choicesCopy)
      
      //set the button value to empty to avoid multiple clicks of answer button
      event.currentTarget.value = ''
      event.target.src = null
    }
  };

  function backSpace(){
    if(answerImageArr.length !== 0){
      incrementBlankAnswers(blankAnswerArr)
      const choicesCopy = [...choicesArr]

      const item = getImages(answerArr[answerArr.length-1])
      choicesCopy.splice(answerIndexArr[answerIndexArr.length-1], 1, item[0])
      setChoicesArr(choicesCopy)

      const answerImageArrCopy = [...answerImageArr]
      answerImageArrCopy.splice(answerImageArrCopy.length-1, 1)
      setAnswerImageArr(answerImageArrCopy)

      const answerArrCopy = [...answerArr]
      answerArrCopy.splice(answerArrCopy.length-1, 1)
      setAnswerArr(answerArrCopy)

      const answerIndexArrCopy = [...answerIndexArr]
      answerIndexArrCopy.splice(answerIndexArrCopy.length-1, 1)
      setAnswerIndexArr(answerIndexArrCopy)
      }
  }

  function renderLostLives(arr){
    if(arr.length !== 0){
      const lives = []

      arr.map((item, key) => {
        lives.push(
          <AiFillHeart className='outlined-heart' key={key}/>
        )
      })
      return lives
    }
  }

  function renderRemainingLives(arr){
    if(arr.length !== 0){
      const lives = []

      arr.map((item, key) => {
        lives.push(
          <AiFillHeart className='filled-heart' key={key}/>
        )
      })

      return lives
    }
  }

  function getRemainingLives(){
    if(difficulty === 'Easy'){
      for(let i =  0; i < 5; i++){
        remainingLives.push('')
      }
    }
    else if(difficulty === 'Medium'){
      for(let i =  0; i < 4; i++){
        remainingLives.push('')
      }
    }
    else {
      for(let i =  0; i < 3; i++){
        remainingLives.push('')
      }
    }
  }

  function reduceLives(){
    const remainingLivesCopy = [...remainingLives]
    remainingLivesCopy.splice(remainingLivesCopy.length-1, 1)
    setRemainingLives(remainingLivesCopy)

    lostLives.push('')
  }

  useEffect(() => {
    if(gameStart){
      if(remainingLives.length === 0){
        console.log("Game Ended!")
        setGameEnded(true)
        setGameStart(false)
      }
    }
  }, [correct, wrong]);

  useEffect(() => {
    if(gameStart){
      getRemainingLives()
    }
  }, [gameStart]);

  useEffect(() => {
    if(choicesArr.length !== 0){
      setAnswerImageArr(getImages(answerArr))
    }
  }, [answerArr]);

  useEffect(() => {
    if(answerImageArr.length !== 0){
      console.log(answerImageArr)
    }
  }, [answerImageArr]);

  useEffect(() => {
    if(imagesArr.length !== 0){
      console.log(imagesArr[arrIndex].value)
      setChoicesArr(getChoices)
      getBlankAnswers(imagesArr[arrIndex].value)
    }
  }, [imagesArr]);

  useEffect(() => {
    if(gameStart){
      console.log(imagesArr[arrIndex].value)
      setChoicesArr(getChoices)
    }
  }, [arrIndex]);

  return (
    <div className='FourPicOneWord'>
      <h2>4 PICS 1 WORD</h2>
      <div className='top-controls'>
        <div className='difficulty-container'>
          <span>GAME LEVEL:</span>

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
        
        <div className='lives-container'>
          {renderLostLives(lostLives)}
          {renderRemainingLives(remainingLives)}
        </div>
      </div>
      
      <div className='picture-container'>
          {gameStart ? renderImage() : ''}
          {gameEnded ? 
          <div className='gameEnded-container'>
            <span>Game Over!</span>
          </div>
          : ''}
      </div>

      <div className='bottom-indicator'>
        <span>Correct: {correct}</span>

        <span>{arrIndex+1}/{imagesArr.length}</span>

        <span>Wrong: {wrong}</span>
      </div>

      <div className='bottom-controls'>
        <button onClick={backSpace}>
          <IoMdBackspace className='btn-icon-backspace'/>
        </button>

        <div className='answer-container'>
          {renderAnswerImages(answerImageArr)}
          {renderBlankAnswers(blankAnswerArr)}
        </div>

        <button onClick={submitAnswer}>
          <IoMdSend className='btn-icon-submit'/>
        </button>
      </div>

      <div className='asl-button-container'>
        {renderChoicesImages(choicesArr)}
      </div>
    </div>
  )
}

export default FourPicOneWord