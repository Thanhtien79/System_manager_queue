import React from 'react'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import LogoAlta from '../../assets/img/Logo alta.png'
import TopBar from '../../Templates/TopBar/TopBar'
import Class from './Info.module.css'
export default function Info() {
  return (
    <div className={Class.Info}>
     
      <div className={Class.MenuBar}>
        <MenuBar></MenuBar>
      </div>
      <div className={Class.TopBar}>
        <TopBar></TopBar>
         </div>

    </div>
  )
}
