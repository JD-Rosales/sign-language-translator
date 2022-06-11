import React, {useRef, useState} from 'react'
import './Practice.css'
import Camera from 'react-webcam'

function Practice() {

  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  const [letter, setLetter] = useState(null);

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
    <div className='Practice'>
      <h1>PRACTICE</h1>

      <div className='header-container'>
        <div className='confidence-container'>
          <span>Gesture Confidence</span>
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
          {letter !== null ? <span className='translation-text'>{letter}</span>:""}
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
    </div>
  )
}

export default Practice