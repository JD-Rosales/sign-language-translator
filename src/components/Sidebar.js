import React from 'react'
import './Sidebar.css';
import {SidebarData} from './SidebarData'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='SideBarHeader'>
        <span className='SideBarHeader1'>Web-based E-Learning Sign Language Translator Game</span>
      </div>
      <ul className='SidebarList'>
        {SidebarData.map((item, key) => {
          return (
            <li key={key} className={item.cName}>
              <Link to={item.link} className={item.cName}>
                <div id='icon'>
                  {item.icon}
                </div>
                <span id='title'>{item.title}</span>
              </Link>
            </li>
        )
        })}
      </ul>
    </div>
  )
}

export default Sidebar