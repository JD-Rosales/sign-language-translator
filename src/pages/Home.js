import React from 'react'
import './Home.css'
import Camera from 'react-webcam'
import { useRef, useState, useEffect } from 'react'
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

function Home() {
  const asl = [a, b, c, d, e, f, g, h, i, k, l, o, p, q, r, s, u, v, w, x, y]

  const [handsign, setHandsign] = useState(null);
  const [gestureConfidence, setGestureConfidence] = useState(null);
  const [loading, setloading] = useState(null);

  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  let currentSign = 0;
  let hasHand = 0

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
      if(hand.length === 0){
        hasHand++;
      }

      if(hasHand === 30){
        setHandsign(null)
        setGestureConfidence(null)
        hasHand = 0
      }

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

          currentSign++;

          if(currentSign === 15){
            setHandsign(gesture.gestures[highestConfidence].name);
            setGestureConfidence("Translation Confidence " + gesture.gestures[highestConfidence].score.toFixed(2) * 10 + "%")
            currentSign = 0;
          }

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
  
  return (
    <div className='Home'>
      <span className='text'>SIGN LANGUAGE TO</span>
      <span className='text2'>TEXT TRANSLATOR</span>

      <div className='main-container'>
        {handsign !== null ? <span className='gesture-confidence'>{gestureConfidence}</span>:""}<span></span>
      </div>

      <Camera
          className='camera'
          ref = {cameraRef}
          mirrored = {true}
      />

      <canvas
        className='canvas'
        ref = {canvasRef}
      />
      <span className='translation'>Translation:</span>
      {handsign !== null ? <span className='translation-text'>{handsign}</span>:""}

      
      {loading ? <Loader />:""}

    </div>
  )
}

export default Home