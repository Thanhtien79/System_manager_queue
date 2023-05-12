import React from 'react'
import LogoAlta from '../../assets/img/Logo alta.png'
import LogoRight from '../../assets/img/Frame.png'
import Class from '../../Pages/ForgotPass/ForgotPass.module.css'
import { Link } from 'react-router-dom'
export default function ForgotPass() {
  return (
    <div className={Class.ForgotPass}>
      <div className={Class.BoxForgotPass}>

        <div className={Class.ForgotPassLeft}>
          <div className={Class.Logoleft} >
            <img src={LogoAlta}></img>
          </div>
          <div className={Class.TextRight}>
            <p> Đặt lại mật khẩu </p>
          </div>
          <div className={Class.TextRights}>
            <p> Vui lòng nhập email để đặt lại mật khẩu của bạn*</p>
          </div>
          <div className={Class.Input}>
            <input type='text' ></input>
          </div>

          <div className={Class.Cancel}>
            <Link to='/Login'>  <button type='button' >Huỷ</button></Link>

          </div>
          <div className={Class.Resume}>
            <Link to='/SetPass'><button type='button' >Tiếp tục</button></Link>
          </div>

        </div>

        <div className={Class.ForgotPassRight}>
          <div className={Class.LogoRight}>
            <img src={LogoRight}></img>
          </div>
        </div>
      </div>


    </div>
  )
}
