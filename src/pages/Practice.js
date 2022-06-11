import React, {useRef} from 'react'
import './Practice.css'
import Camera from 'react-webcam'

function Practice() {

  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

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

        </div>
      </div>

      <div className='text-container'>
        <span>Click any letter to start</span>
      </div>

      <div className='btn-container'>
        <button type="button">A</button>
        <button type="button">B</button>
        <button type="button">C</button>
        <button type="button">D</button>
        <button type="button">E</button>
        <button type="button">F</button>
        <button type="button">G</button>
        <button type="button">H</button>
        <button type="button">I</button>
        <button type="button">G</button>
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

export default Practice