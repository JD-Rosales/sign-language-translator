import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'

export const SidebarData = [
  {
    title: "HOME",
    icon: <AiFillHome />,
    link: "/",
    cName: 'SidebarItems'
  },
  {
    title: "PLAY A GAME!",
    icon: <IoLogoGameControllerB />,
    link: "/play",
    cName: 'SidebarItems'
  },
  {
    title: "PRACTICE",
    icon: <IoLogoGameControllerB />,
    link: "/practice",
    cName: 'SidebarItems'
  },
]