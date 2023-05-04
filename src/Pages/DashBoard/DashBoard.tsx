import React from 'react'
import Class from './DashBorad.module.css'
import TopBar from '../../Templates/TopBar/TopBar'
import MenuBar from '../../Templates/MenuBar/MenuBar'
export default function DashBoard() {
  return (
    <div>
        <MenuBar></MenuBar>
        <TopBar></TopBar>
    </div>
  )
}
