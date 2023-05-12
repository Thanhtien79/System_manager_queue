import React from 'react'
import Class from './EditDevice.module.css'
import { Link } from 'react-router-dom'

import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { Button, Input, Space } from 'antd';
import { useState } from 'react'
export default function EditDevice() {
    const [select1Value, setSelect1Value] = useState('option1');
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };
    return (
        <div className={Class.EditForm}>
             <MenuBar></MenuBar>
            <TopBar></TopBar>
            <h1>Quản lý thiết bị</h1>
            <div className={Class.MenuAdd}>
                <p>Thông tin thiết bị</p>
                <div className={Class.MenuAddLeft}>
                    <div className={Class.Code}>
                        <span className={Class.Title}>Mã thiết bị: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='KIO_01' />
                    </div>
                    <div className={Class.NameCode}>
                        <span className={Class.Title}>Tên thiết bị: </span>
                        <span className={Class.Icon} >*</span>
                        <Input placeholder='Kiosk' />
                    </div>
                    <div className={Class.Local}>
                        <span className={Class.Title}>Địa chỉ IP: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='128.172.308' />
                    </div>

                </div>
                <div className={Class.MenuAddRight}>
                    <div className={Class.Loai}>
                        <span className={Class.Title}>Loại thiết bị: </span>
                        <span className={Class.Icon}>*</span>
                        <select id="option1" value={select1Value} onChange={handleSelect1Change} >
                            <option disabled={true} value="option1">Chọn loại thiết bị</option>
                            <option value="option2">Kiosk</option>
                            <option value="option3">Display counter</option>
                        </select>
                    </div>
                    <div className={Class.NameInput}>
                        <span className={Class.Title}>Tên đăng nhập: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='Linhkyo011' />
                    </div>
                    <div className={Class.Pass}>
                        <span className={Class.Title}>Địa chỉ IP: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='CMS' />
                    </div>

                </div>
                <div className={Class.UseSevice}>
                    <span className={Class.Title}>Dịch vụ sử dụng: </span>
                    <span className={Class.Icon}>*</span>
                    <Input placeholder='Nhập dịch vụ sử dụng' />
                    <span className={Class.Icon}>*</span>
                    <span className={Class.Titles}>Là trường thông tin bắt buộc</span>
                </div>
            </div>
            <div className={Class.BtnCance}>

            <Link to='/Login'>  <button type='button' >Huỷ</button></Link>
            </div>
            <div className={Class.BtnAdd}>
            <Link to='/SetPass'><button type='button' >Cập nhập</button></Link>
            </div>
        </div>
    )
}
