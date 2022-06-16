import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiDumbbell} from 'react-icons/bi'

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
    icon: <BiDumbbell />,
    link: "/practice",
    cName: 'SidebarItems'
  },
]