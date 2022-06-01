import './App.css';
import Camera from 'react-webcam'
import { useRef, useState } from 'react'
import * as handPose from '@tensorflow-models/handpose'
import '@tensorflow/tfjs-backend-webgl'
import { drawHand } from './Drawing'
import * as fingerpose from "fingerpose"

import {a} from './asl/A'
import {b} from './asl/B'
import {c} from './asl/C'
import {d} from './asl/D'
import {e} from './asl/E'

function App() {
  const asl = [a, b, c, d, e]

  const [handsign, setHandsign] = useState(null);

  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  function signToText(){
    startDetection()
  }

  function textToSign(){
  }

  const detectHand = async (model) => {
    if(cameraRef.current.video.readyState === 4){
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

        if(gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const arrConfidence = gesture.gestures.map( confidence => confidence.score)

          const max = Math.max(...arrConfidence)

          const highestConfidence = arrConfidence.indexOf(max)

          setHandsign(gesture.gestures[highestConfidence].name);
        }
      }
    }
  }
  
  async function startDetection() {
    console.log("Loading Handpose Model")
    const model = await handPose.load();
    console.log("Handpose Model Loaded!")

    setInterval( () => {
      detectHand(model)
    }, 100)
  }

  return (
    <div className="App">
      <div className='btn-grp'>
        <button className='btn-sign-to-text' onClick={signToText}>Sign Language to Text</button>
        <button className='btn-text-to-sign' onClick={textToSign}>Text to Sign Language</button>
      </div>

      <div className="sign-to-text">
        <Camera
          className='camera'
          ref = {cameraRef}
          mirrored = {true}
        />

        <canvas
          className='canvas'
          ref = {canvasRef}
        />

        {handsign !== null ? <span className='hand-sign-text'>{handsign}</span>:""}

      </div>

    </div>
  );
}

export default App;
