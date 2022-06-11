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
    </div>
  )
}

export default Practice