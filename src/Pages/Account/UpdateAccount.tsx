import React, { Component } from 'react'
import Class from './UpdateAccount.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { Button, Input, Space } from 'antd';
import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function UpdateAccount() {
    const [select1Value, setSelect1Value] = useState('option1');


    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };
    const [select2Value, setSelect2Value] = useState('option2');


    const handleSelect2Change = (event: any) => {
        setSelect2Value(event.target.value);
    };
    return (
        <div className={Class.UpdateAccount}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Titlle}>
                <h1>Quản lý tài khoản</h1>
            </div>
            <div className={Class.BoxAdd}>
                <h1>Thông tin tài khoản</h1>
                <div className={Class.MenuLeft}>
                    <div className={Class.Name}>
                        <span className={Class.Title}>Họ tên </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='Nhập họ tên' />
                    </div>
                    <div className={Class.Phone}>
                        <span className={Class.Title}>Số điện thoại </span>
                        <span className={Class.Icon} >*</span>
                        <Input placeholder='Nhập số điện thoại' />
                    </div>
                    <div className={Class.Email}>
                        <span className={Class.Title}>Email </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='Nhập email' />
                    </div>
                    <div className={Class.Dropdown}>
                        <span className={Class.Title}>Vai trò </span>
                        <span className={Class.Icon}>*</span>
                        <select id="option1" value={select1Value} onChange={handleSelect1Change} style={{ width: 550, top: 310 }}>
                            <option disabled={true} value="option1">Chọn Vai trò</option>
                            <option value="option2">Kế toán</option>
                            <option value="option3">Quản lý</option>
                            <option value="option4">Admin</option>
                        </select>

                    </div>
                    <div className={Class.Note}>

                        <span className={Class.Icon}>*</span>
                        <span className={Class.Titles}>Là trường thông tin không bắt buộc </span>
                    </div>
                </div>
                <div className={Class.MenuRight}>
                    <div className={Class.NameAccount}>
                        <span className={Class.Title}>Tên đăng nhập </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='Nhập tên đăng nhập' />
                    </div>
                    <div className={Class.Pass}>
                        <span className={Class.Title}>Mật khẩu </span>
                        <span className={Class.Icon}>*</span>
                        <Input.Password placeholder="" style={{ height: 44 }} />
                    </div>
                    <div className={Class.RePass}>
                        <span className={Class.Title}>Nhập lại mật khẩu </span>
                        <span className={Class.Icon}>*</span>
                        <Input.Password placeholder="" style={{ height: 44 }} />
                    </div>
                    <div className={Class.Status}>
                        <span className={Class.Title}>Tình trạng </span>
                        <span className={Class.Icon}>*</span>
                        <select id="option2" value={select2Value} onChange={handleSelect2Change} style={{ width: 550, top: 310 }}>

                            <option value="option1">Tất cả</option>
                            <option value="option2">Hoạt động</option>
                            <option value="option3">Ngưng hoạt động</option>
                        </select>

                    </div>
                </div>
            </div>
            <div className={Class.BtnCance}>

                <Link to='/Login'>  <button type='button' >Huỷ bỏ</button></Link>
            </div>
            <div className={Class.BtnAdd}>
                <Link to='/SetPass'><button type='button' >Cập nhật</button></Link>
            </div>

        </div>
    )
}




