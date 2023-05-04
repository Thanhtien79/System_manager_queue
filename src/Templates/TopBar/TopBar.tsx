import React from 'react'
import Class from './TopBar.module.css'
import Ring from '../../assets/img/Frame271.png'
import Ava from '../../assets/img/avatar.png'
import { Link } from 'react-router-dom'
export default function TopBar() {
  return (
    <div className={Class.TopBar}>
      <div className={Class.ContentLeft}>
        <p> Thông tin cá nhân </p>
      </div>
      <div className={Class.ImgRing}>
        <img src={Ring} ></img>
      </div>
      <div className={Class.ImgAvt}>
        <Link to='/Info'> <img src={Ava}></img></Link>
      </div>
      <div className={Class.ContentRight}>


        <p className={Class.Name}>Xin Chào</p>
        <p className={Class.Names}>Lê Quỳnh Ái Vân</p>
      </div>
    </div>
  )
}
