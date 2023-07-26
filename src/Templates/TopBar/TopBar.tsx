
import Class from './TopBar.module.css'
import Ring from '../../assets/img/Frame271.png'
import Ava from '../../assets/img/avatar.png'
import { Link } from 'react-router-dom'
import { auth } from '../../FireBaseConfig/FireBase'
import { onAuthStateChanged, User, signOut } from 'firebase/auth';

import React, { useState } from 'react'
export default function TopBar() {
  const [user, setUser] = useState<User | null>(null);


   onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

  
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
        <p className={Class.Names}>{user?.email}</p>
      </div>
    </div>
  )
}
