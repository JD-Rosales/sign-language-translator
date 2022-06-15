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
  const asl = [A, B, C , D ,E , F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]

  const [game, setGame] = useState(false);

  const [correct, setCorrect] = useState(0);

  const [asl_img, setAsl_img] = useState(null);

  const [aslArray, setAslArray] = useState(null);

  const [difficulty, setDifficulty] = useState('Easy');

  function getAsl(arr, num){
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  function startGame(){
    if(difficulty === 'Easy'){
      setAslArray(getAsl(asl, 5))
    }
    if(difficulty === 'Medium'){
      setAslArray(getAsl(asl, 10))
    }
    if(difficulty === 'Hard'){
      setAslArray(getAsl(asl, 10))
    }
    setGame(true)
  }

  function resetGame(){
    setGame(false)
    setCorrect(0)
    setAsl_img(null)
    setAslArray(null)
  }

  function changeDifficulty(e){
    setDifficulty(e.target.value)
  }

  function correctAsl(){
    setAsl_img(aslArray[correct])
    if(correct < aslArray.length-1){
      setCorrect(correct+1)
    }
  }

  useEffect( () => {
    console.log(aslArray)
  }, [aslArray]);

  useEffect( () => {
    if(aslArray !== null){
      setAsl_img(aslArray[correct])
    }
  }, [correct, aslArray]);

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
          <span>30:00.00</span>
        </div>
      </div>

      <div className='asl-img-container'>
        {asl_img !== null ? <img className='asl-image' src={asl_img} alt='ASL'></img>:""}
      </div>

      <div className='bottom-controls'>
        
        <div className='correct-container'>
          <span>Correct: 1</span>
        </div>
        
        <div  className='total-container'>
          <span>4/10</span>
        </div>

        <div className='wrong-container'>
          <span>Wrong: 3</span>
        </div>
      </div>

      <div className='btn-container'>
        <button type="button" onClick={correctAsl}>A</button>
        <button type="button">B</button>
        <button type="button">C</button>
        <button type="button">D</button>
        <button type="button">E</button>
        <button type="button">F</button>
        <button type="button">G</button>
        <button type="button">H</button>
        <button type="button">I</button>
        <button type="button">J</button>
        <button type="button">K</button>
        <button type="button">L</button>
        <button type="button">M</button>
        <button type="button">N</button>
        <button type="button">O</button>
        <button type="button">P</button>
        <button type="button">Q</button>
        <button type="button">R</button>
        <button type="button">S</button>
        <button type="button">T</button>
        <button type="button">U</button>
        <button type="button">V</button>
        <button type="button">W</button>
        <button type="button">X</button>
        <button type="button">Y</button>
        <button type="button">Z</button>
      </div>

    </div>
  )
}

export default GuessHandSign