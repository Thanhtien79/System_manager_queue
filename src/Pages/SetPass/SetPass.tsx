import React from 'react'
import LogoAlta from '../../assets/img/Logo alta.png'
import LogoRight from '../../assets/img/Frame.png'
import Class from '../../Pages/SetPass/SetPass.module.css'
import { Button, Input, Space } from 'antd';
import { Link } from 'react-router-dom'
 
export default function SetPass() 
{
    return (
        <div className={Class.SetPass}>
            <div className={Class.BoxSet}>
    
                <div className={Class.LoginLeft}>
                    <div className={Class.Logoleft} >
                        <img src={LogoAlta}></img>
                    </div>
                    <div className={Class.TitleSet}>
                        <p>Đặt lại mật khẩu mới </p>
                       
                    </div>
                    <div className={Class.Input}>
                        <p>Mật khẩu</p>
                        <Input.Password placeholder="" />

                    </div>
                 
                    <div className={Class.Pass}>
                        <p>Nhập lại mật khẩu</p>
                        <Input.Password placeholder="" />

                    </div>
                
                   
                    <div className={Class.BtnLogin}> 
                     <Link to='/Login'><button type='button' >Xác nhận</button></Link>
                    
                    </div>

                </div>

                <div className={Class.LoginRight}>
                    <div className={Class.LogoRight}> 
                    <img src={LogoRight}></img>
                    </div>
               
                </div>
            </div>


        </div>
    )
}
