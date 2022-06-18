import React, {useRef, useState, useEffect} from 'react'
import './FingerSpell.css'
import Camera from 'react-webcam'
import * as handPose from '@tensorflow-models/handpose'
import '@tensorflow/tfjs-backend-webgl'
import { drawHand } from '../Drawing'
import * as fingerpose from "fingerpose"
import Loader from '../components/Loader'

import {a} from '../asl/A'
import {b} from '../asl/B'
import {c} from '../asl/C'
import {d} from '../asl/D'
import {e} from '../asl/E'
import {f} from '../asl/F'
import {g} from '../asl/G'
import {h} from '../asl/H'
import {i} from '../asl/I'

import {k} from '../asl/K'
import {l} from '../asl/L'


import {o} from '../asl/O'
import {p} from '../asl/P'
import {q} from '../asl/Q'
import {r} from '../asl/R'
import {s} from '../asl/S'

import {u} from '../asl/U'
import {v} from '../asl/V'
import {w} from '../asl/W'
import {x} from '../asl/X'
import {y} from '../asl/Y'

function FingerSpell() {
  const asl = [a, b, c, d, e, f, g, h, i, k, l, o, p, q, r, s, u, v, w, x, y]

  const easyWords = [
    "COC",
    "CLC",
    "CAC",
  ]

  const mediumWords = [
    "LOLA",
    "LOLC", 
    "LOLX",
  ]

  const hardWords = [
    "ALOLA",
    "OLOCA",
    "CALOCA",
  ]

  const [handsign, setHandsign] = useState(null);
  const [loading, setloading] = useState(null);

  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  const [gameStart, setGameStart] = useState(false);

  const [gameEnded, setGameEnded] = useState(false);

  const [word, setWord] = useState(null);

  const [letttersArr, setLetttersArr] = useState(null);

  const [letterIndex, setLetterIndex] = useState(0);

  const [difficulty, setDifficulty] = useState('Easy');

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function startGame(){
    resetGame()
    setGameStart(true)
    if(difficulty === 'Easy'){
      setWord(getRandomWord(easyWords))
      setMinutes(1)
      setSeconds(30)
    }
    if(difficulty === 'Medium'){
      setWord(getRandomWord(mediumWords))
      setMinutes(0)
      setSeconds(59)
    }
    if(difficulty === 'Hard'){
      setWord(getRandomWord(hardWords))
      setMinutes(0)
      setSeconds(30)
    }
  }

  function resetGame(){
    setGameStart(false)
    setWord(null)
    setHandsign(null)
    setLetterIndex(0)
    setGameEnded(null)
    setLetttersArr(null)
    setGameEnded(false)
    setMinutes(0)
    setSeconds(0)
  }

  function changeDifficulty(e){
    setDifficulty(e.target.value)
    resetGame()
  }

  function getRandomWord(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex]

    //convert the word into an array of letters
    setLetttersArr(toArray(item))
    return item
  }

  function toArray(str){
    const arr = Array.from(str)
    return arr
  }

  const detectHand = async (model) => {
    if(cameraRef.current !==null && cameraRef.current.video.readyState === 4){
      setloading(false);
      const video = cameraRef.current.video
      const videoHeight = cameraRef.current.video.videoHeight
      const videoWidth = cameraRef.current.video.videoWidth

      cameraRef.current.video.width = videoWidth
      cameraRef.current.video.height = videoHeight

      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      const hand = await model.estimateHands(video, true)

      if(hand.length > 0){
        const canvas = canvasRef.current.getContext("2d");
        drawHand(hand, canvas);

        const estimateGesture = new fingerpose.GestureEstimator(asl)

        const gesture = await estimateGesture.estimate(hand[0].landmarks, 8.5)
        // console.log(gesture.poseData)

        if(gesture.gestures !== undefined && gesture.gestures.length > 0){
          const arrConfidence = gesture.gestures.map( confidence => confidence.score)

          const max = Math.max(...arrConfidence)

          const highestConfidence = arrConfidence.indexOf(max)
          // console.log(gesture.gestures[highestConfidence].name)

          setHandsign(gesture.gestures[highestConfidence].name)
        }
      }

    }
  }

  async function startDetection() {
    setloading(true);

    const model = await handPose.load();

    setInterval( () => {
      detectHand(model)
    }, 100)
  }

  useEffect(() => {
    startDetection();
  }, []);

  useEffect(() => {
    if(handsign && gameStart && letttersArr){
      console.log(handsign)
      if(handsign === letttersArr[letterIndex]){
        console.log("Gesture Matched!")
        setLetterIndex(letterIndex+1)
      }
    }    
  }, [handsign]);

  //Game Ended
  useEffect(() => {
    if(letttersArr){
      if(letterIndex === letttersArr.length){
        setGameStart(false)
        setGameEnded(true)
      }
    }
  }, [letterIndex]);

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
    <div className='FingerSpell'>
      <h2>FINGER SPELL THE WORD</h2>

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

      <div className='asl-container'>
        <Camera
            className='camera'
            ref = {cameraRef}
            mirrored = {true}
        />

        <canvas
          className='canvas'
          ref = {canvasRef}
        />
        {letttersArr ? <span className='letter'>{letttersArr[letterIndex]}</span>:""}
        {gameEnded ? <div className='game-ended-container'>
          <span>FINGER SPELL COMPLETE!</span>

          <span>Time Remaining</span>
          <span>{minutes}:{seconds}</span>

          <button onClick={startGame}>NEW GAME</button>
        </div>:""}
      </div>

      <div className='word-container'>
        <span>FINGER SPELL THE WORD:</span>
        {gameStart ? <span>{word}</span>:""}
      </div>

      {loading ? <Loader />:""}
    </div>
  )
}

export default FingerSpell