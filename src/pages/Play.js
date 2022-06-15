import React from 'react'
import { Link } from 'react-router-dom'
import './Play.css'
import {PlayData} from './PlayData'

function Play() {
  return (
    <div className='Play'>
      <h1>CHOOSE A GAME</h1>

      <ul className='PlayList'>
        {PlayData.map((item, key) => {
          return (
            <li key={key} className={item.cName}>
              <Link to={item.link} className={item.cName}>
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Play