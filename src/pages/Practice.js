import React, {useRef, useState, useEffect} from 'react'
import './Practice.css'
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

function Practice() {

  const asl = [a, b, c, d, e, f, g, h, i, k, l, o, p, q, r, s, u, v, w, x, y]

  const [handsign, setHandsign] = useState(null);
  const [gestureConfidence, setGestureConfidence] = useState(null);
  const [loading, setloading] = useState(null);

  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  const [letter, setLetter] = useState('');
  const [asl_img, setasl_img] = useState(null);

  const [gestureMatch, setGestureMatch] = useState(false);

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

          setHandsign(gesture.gestures[highestConfidence].name);
          setGestureConfidence("confidence " + gesture.gestures[highestConfidence].score.toFixed(2) * 10 + "%")
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
    if(handsign === letter){
      setGestureMatch(true);
    } else {
      setGestureMatch(false);
    }
  }, [handsign, letter, gestureMatch]);

  function btnA(){
    setLetter('A')
    setasl_img(A)
  }
  function btnB(){
    setLetter('B')
    setasl_img(B)
  }
  function btnC(){
    setLetter('C')
    setasl_img(C)
  }
  function btnD(){
    setLetter('D')
    setasl_img(D)
  }
  function btnE(){
    setLetter('E')
    setasl_img(E)
  }
  function btnF(){
    setLetter('F')
    setasl_img(F)
  }
  function btnG(){
    setLetter('G')
    setasl_img(G)
  }
  function btnH(){
    setLetter('H')
    setasl_img(H)
  }
  function btnI(){
    setLetter('I')
    setasl_img(I)
  }
  function btnJ(){
    setLetter('J')
    setasl_img(J)
  }
  function btnK(){
    setLetter('K')
    setasl_img(K)
  }
  function btnL(){
    setLetter('L')
    setasl_img(L)
  }
  function btnM(){
    setLetter('M')
    setasl_img(M)
  }
  function btnN(){
    setLetter('N')
    setasl_img(N)
  }
  function btnO(){
    setLetter('O')
    setasl_img(O)
  }
  function btnP(){
    setLetter('P')
    setasl_img(P)
  }
  function btnQ(){
    setLetter('Q')
    setasl_img(Q)
  }
  function btnR(){
    setLetter('R')
    setasl_img(R)
  }
  function btnS(){
    setLetter('S')
    setasl_img(S)
  }
  function btnT(){
    setLetter('T')
    setasl_img(T)
  }
  function btnU(){
    setLetter('U')
    setasl_img(U)
  }
  function btnV(){
    setLetter('V')
    setasl_img(V)
  }
  function btnW(){
    setLetter('W')
    setasl_img(W)
  }
  function btnX(){
    setLetter('X')
    setasl_img(X)
  }
  function btnY(){
    setLetter('Y')
    setasl_img(Y)
  }
  function btnZ(){
    setLetter('Z')
    setasl_img(Z)
  }

  return (
    <div className='Practice'>
      <h1>PRACTICE</h1>

      <div className='header-container'>
        <div className='confidence-container'>
          {handsign !== null && letter !== null && gestureMatch !== false ? <span>Gesture matched! {gestureConfidence}</span>:""}
        </div>

        <div>
          <span>ASL Character</span>
        </div>
      </div>
      <div className='practice-container'>
        <div className='camera-canvas-container'>
        <Camera
          className='camera'
          ref = {cameraRef}
          mirrored = {true}
        />

        <canvas
          className='canvas'
          ref = {canvasRef}
        />
        </div>

        <div className='asl-container'>
          {letter !== '' ? <img className='asl-image' src={asl_img} alt='ASL'></img>:""}
        </div>
      </div>

      <div className='text-container'>
        <span>Click any letter to start</span>
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

      {loading ? <Loader />:""}
    </div>
  )
}

export default Practice