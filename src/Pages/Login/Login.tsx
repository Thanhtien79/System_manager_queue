import React, { useState } from 'react'
import LogoAlta from '../../assets/img/Logo alta.png'
import LogoRight from '../../assets/img/Group 341.png'
import Class from '../Login/Login.module.css'
import { Link } from 'react-router-dom';

import { Button, Input, Space } from 'antd';
export default function Login() {



    return (

        <div className={Class.LoginUser}>
            <div className={Class.BoxLogin}>

                <div className={Class.LoginLeft}>
                    <div className={Class.Logoleft} >
                        <img src={LogoAlta}></img>
                    </div>
                    <div className={Class.Input}>
                        <p>Tên đăng nhập *</p>
                        <Input placeholder='' />
                    </div>
                    <div className={Class.Pass}>
                        <p>Mật khẩu *</p>
                        <Input.Password placeholder="" />

                        {/* <button onClick={ }>  <EyeInvisibleOutlined /></button> */}
                    </div>




                    <div className={Class.PassForgot}>
                        <Link to="/ForgotPass"> Quên mật khẩu ?</Link>
                    </div>
                    <div className={Class.BtnLogin}>
                        <Link to="/DashBoard"  >
                            <button>Đăng nhập</button>
                        </Link>
                    </div>

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
