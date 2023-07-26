import React, { useState } from 'react'
import LogoAlta from '../../assets/img/Logo alta.png'
import LogoRight from '../../assets/img/Group 341.png'
import Class from '../Login/Login.module.css'
import { Link,useNavigate } from 'react-router-dom';
import { onAuthStateChanged, User, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FireBaseConfig/FireBase'
import { Button, Input, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
export default function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();
   
    
      

    const login = async () => {
        if (loginEmail == "" || loginPass == "") {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
        else {
            try {
               
                const user = await signInWithEmailAndPassword(
                    auth,
                    loginEmail,
                    loginPass,
                    
                ); 
                navigate("/Info")       
            } catch (error) {
                setError(" Sai mật khẩu hoặc tên đăng nhập");

            }
        }


    }




    return (

        <div className={Class.LoginUser}>
            <div className={Class.BoxLogin}>

                <div className={Class.LoginLeft}>
                    <div className={Class.Logoleft} >
                        <img src={LogoAlta}></img>
                    </div>
                    <div className={Class.Input}>
                        <p>Tên đăng nhập *</p>
                        <Input placeholder='' onChange={(event) => { setLoginEmail(event.target.value) }} />
                    </div>
                    <div className={Class.Pass}>
                        <p>Mật khẩu *</p>
                        <Input.Password placeholder="" onChange={(event) => { setLoginPass(event.target.value) }} />

                        {/* <button onClick={ }>  <EyeInvisibleOutlined /></button> */}
                    </div>




                    <div className={Class.PassForgot}>
                        <Link to="/ForgotPass"> Quên mật khẩu ?</Link>
                    </div>
                    <div className={Class.BtnLogin}>

                        <button onClick={login}>Đăng nhập</button>

                    </div>
                    {error && <p className={Class.Erlog}> <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#E73F3F",}} />{error}</p>}

                </div>

                <div className={Class.LoginRight}>
                    <div className={Class.LogoRight}>
                        <img src={LogoRight}></img>
                    </div>
                    <div className={Class.TextRight}>
                        <h1> Hệ thống</h1>
                    </div>
                    <div className={Class.TextRights}>
                        <h1> QUẢN LÝ XẾP HÀNG</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}
