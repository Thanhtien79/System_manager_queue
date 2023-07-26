import React from 'react'
import { Link } from 'react-router-dom'
import Class from './AddDevice.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { Button, Input, Space } from 'antd';
import { useState } from 'react'
import { collection, getDocs, query, where, onSnapshot, CollectionReference, Query, DocumentData, addDoc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig/FireBase';
export default function AddDevice() {
    const [select1Value, setSelect1Value] = useState('option1');
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };
    const [devices, setDevices] = useState([]);
    const deColRef = collection(db, "Devices");
    const [device_Code, setnewdevice_Code] = useState("");
    const [device_IP, setnewdevice_IP] = useState("");
    const [device_Name, setnewdevice_Name] = useState("");
    const [device_Service, setnewdevice_Service] = useState("");


    const creDevcie = async () => {
        if (device_Code == "" || device_Name == "" || device_IP == "") {
            alert("Thông tin chưa đầy đủ vui lòng thử lại sau.");
        }
        else {
            await addDoc(deColRef, {
                Device_Code: device_Code,
                Devices_IP: device_IP,
                Devices_Name: device_Name,
                Devices_Service: device_Service,
            });
        }



    };
    return (

        <div className={Class.AddDevice}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <h1>Quản lý thiết bị</h1>
            <div className={Class.MenuAdd}>
                <p>Thông tin thiết bị</p>
                <div className={Class.MenuAddLeft}>
                    <div className={Class.Code}>
                        <span className={Class.Title}>Mã thiết bị: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='Nhập mã thiết bị' onChange={(event) => { setnewdevice_Code(event.target.value) }} />
                    </div>
                    <div className={Class.NameCode}>
                        <span className={Class.Title}>Tên thiết bị: </span>
                        <span className={Class.Icon} >*</span>
                        <Input placeholder='Nhập tên thiết bị' onChange={(event) => { setnewdevice_Name(event.target.value) }} />
                    </div>
                    <div className={Class.Local}>
                        <span className={Class.Title}>Địa chỉ IP: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='Nhập địa chỉ IP' onChange={(event) => { setnewdevice_IP(event.target.value) }} />
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
                    <div className={Class.Right}>
                        <div className={Class.NameInput}>
                            <span className={Class.Title}>Tên đăng nhập: </span>
                            <span className={Class.Icon}>*</span>
                            <Input placeholder='Nhập tài khoản' />
                        </div>
                        <div className={Class.Pass}>
                            <span className={Class.Title}>Mật khẩu: </span>
                            <span className={Class.Icon}>*</span>
                            <Input placeholder='Nhập mật khẩu' />
                        </div>
                    </div>

                </div>
                <div className={Class.UseSevice}>
                    <span className={Class.Title}>Dịch vụ sử dụng: </span>
                    <span className={Class.Icon}>*</span>
                    <Input placeholder='Nhập dịch vụ sử dụng' onChange={(event) => { setnewdevice_Service(event.target.value) }} />
                    <span className={Class.Icon}>*</span>
                    <span className={Class.Titles}>Là trường thông tin bắt buộc</span>
                </div>
            </div>
            <div className={Class.BtnCance}>

                <Link to='/Login'>  <button type='button' >Huỷ bỏ</button></Link>
            </div>
            <div className={Class.BtnAdd}>
                <Link to='/Device'><button type='button' onClick={creDevcie}>Thêm thiết bị</button></Link>
            </div>

        </div>
    )
}
