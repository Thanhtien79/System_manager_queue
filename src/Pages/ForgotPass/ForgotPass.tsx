import React, { useState } from 'react'
import LogoAlta from '../../assets/img/Logo alta.png'
import LogoRight from '../../assets/img/Frame.png'
import Class from '../../Pages/ForgotPass/ForgotPass.module.css'
import { Link,useNavigate } from 'react-router-dom'
import { onAuthStateChanged, User, signOut, signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../FireBaseConfig/FireBase'

export default function ForgotPass() {

    const [email, setEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);
    const navigate = useNavigate();

  
    const handleResetPassword = async () => {

      if( email==""){
        alert("Vui lòng điền đầy đủ thông tin")
      }
      else{
        try {
          await sendPasswordResetEmail(auth,email);
          setResetSent(true);
          navigate("/SetPass")  
        } catch (error) {
          alert("Lỗi gửi mail")
        }
      }

     
    };
  
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
            <input type='text'  onChange={(event) => { setEmail(event.target.value) }} ></input>
          </div>

          <div className={Class.Cancel}>
            <Link to='/Login'>  <button type='button' >Huỷ</button></Link>

          </div>
          <div className={Class.Resume}>
            <button type='button' onClick={handleResetPassword} >Tiếp tục</button>
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
