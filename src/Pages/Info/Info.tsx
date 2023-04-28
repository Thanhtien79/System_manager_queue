import React from 'react'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import LogoAlta from '../../assets/img/Logo alta.png'
import TopBar from '../../Templates/TopBar/TopBar'
import Class from './Info.module.css'
import Ava from '../../assets/img/AvatarBig.png'
import Cmr from '../../assets/img/Group624817.png'
import Input from 'antd/es/input/Input'
export default function Info() {
  return (
    <div className={Class.Info}>

      <div className={Class.MenuBar}>
        <MenuBar></MenuBar>
      </div>
      <div className={Class.TopBar}>
        <TopBar></TopBar>
      </div>
      <div className={Class.TableInfo}>
        <div className={Class.Avatar}>
          <img src={Ava}></img>
        </div>
        <div className={Class.Camera}>
          <img src={Cmr}></img>
        </div>
        <div className={Class.Namee}>
          <p>Lê Quỳnh Ái Vân</p>
        </div>
        <div className={Class.InfoLeft}>
          <div className={Class.NameUser}>
            <p>Tên người dùng</p>
            <Input placeholder='' />
          </div>
          <div className={Class.Number}>
            <p>Số điện thoại</p>
            <Input placeholder='' />
          </div>
          <div className={Class.Email}>
            <p>Email:</p>
            <Input placeholder='' />
          </div>

        </div>
        <div className={Class.InfoRight}>
          <div className={Class.NameLogin}>
            <p>Tên đăng nhập</p>
            <Input placeholder='' />
          </div>
          <div className={Class.Pass}>
            <p>Mật khẩu</p>
            <Input placeholder='' />
          </div>
          <div className={Class.Vaitro}>
            <p>Vai Trò:</p>
            <Input placeholder='' />
          </div>
        </div>
      </div>

    </div>
  )
}
