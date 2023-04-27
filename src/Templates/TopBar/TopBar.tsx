import React from 'react'
import Class from './TopBar.module.css'
import Ring from '../../assets/img/Frame271.png'
import Ava from '../../assets/img/avatar.png'
export default function TopBar() {
  return (
    <div className={Class.TopBar}>
        <div className={Class.ContentLeft}>
            <p> Thông tin cá nhân </p>
        </div>
        <div className={Class.ContentRight}>
            <img src={Ring} ></img>
            <img src={Ava}></img>
            <p>Xin Chào</p>
            <p>Lê Quỳnh Ái Vân</p>
        </div>
    </div>
  )
}
