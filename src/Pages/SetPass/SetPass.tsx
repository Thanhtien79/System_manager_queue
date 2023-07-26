import React, { useState } from 'react'
import LogoAlta from '../../assets/img/Logo alta.png'
import LogoRight from '../../assets/img/Frame.png'
import Class from '../../Pages/SetPass/SetPass.module.css'
import { Button, Input, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, User, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset, EmailAuthProvider } from 'firebase/auth';
import { auth } from '../../FireBaseConfig/FireBase'
export default function SetPass() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetCompleted, setResetCompleted] = useState(false);
    const navigate = useNavigate();
    const handleResetPassword = async () => {
        if (newPassword == "" || confirmPassword == "") {
            alert("Mật khẩu và xác nhận không được để trống");
        }
        else {
            try {
                if (newPassword !== confirmPassword) {
                    alert('Mật khẩu và xác nhận mật khẩu không khớp.');
                    return;
                }

                const resetCode = window.location.search.split('oobCode=')[1];
                await confirmPasswordReset(auth, resetCode, newPassword
                    );
                setResetCompleted(true);
                navigate("/Login")
           
            } catch (error) {
                alert('Đặt lại mật khẩu không thành công. Vui lòng thử lại.');
                
            }
        };
    }


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
                        <Input.Password placeholder="" onChange={(event) => { setNewPassword(event.target.value) }} />

                    </div>

                    <div className={Class.Pass}>
                        <p>Nhập lại mật khẩu</p>
                        <Input.Password placeholder="" onChange={(event) => { setConfirmPassword(event.target.value) }} />

                    </div>


                    <div className={Class.BtnLogin}>
                        <button type='button' onClick={handleResetPassword} >Xác nhận</button>

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
