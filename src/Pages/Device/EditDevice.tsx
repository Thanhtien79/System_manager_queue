import React, { useEffect } from 'react'
import Class from './EditDevice.module.css'
import { Link, useParams } from 'react-router-dom'

import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { Button, Input, Space } from 'antd';
import { useState } from 'react'
import { collection, getDoc, query, where, onSnapshot, CollectionReference, Query, DocumentData, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig/FireBase';
export default function EditDevice() {
    const [select1Value, setSelect1Value] = useState('option1');
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };
    const [updevices, setUpDevices] = useState();


    const [device_Code, setdevice_Code] = useState("");
    const [device_UpCode, setUpdevice_Code] = useState("");
    const [device_IP, setdevice_IP] = useState("");
    const [device_UpIP, setdevice_UpIP] = useState("");
    const [device_Name, setdevice_Name] = useState("");
    const [device_UpName, setdevice_UpName] = useState("");
    const [device_Service, setdevice_Service] = useState("");
    const [device_UpService, setdevice_UpService] = useState("");
    const { id } = useParams();

    const getId = async () => {
        try {
            if (!id) {
                console.log("Id Không hợp lệ");
                return;
            }
            const getDevices = doc(db, 'Devices', id);
            const DevicesSnapshot = await getDoc(getDevices);
            if (DevicesSnapshot.exists()) {
                const Data = DevicesSnapshot.data();
                setdevice_Code(Data.Device_Code);
                setdevice_IP(Data.Devices_IP);
                setdevice_Name(Data.Devices_Name);
                setdevice_Service(Data.Devices_Service);
            }
        } catch (error) {
            console.error('Error getting device:', error);
        }

    };

    getId();

    const updateDevice = async () => {
        const UpDeCode = device_UpCode || device_Code;
        const UpDeIp = device_UpIP || device_IP;
        const UpDeName = device_UpName || device_Name;
        const UpSerVice = device_UpService || device_Service;

        try {
            const getDevices = doc(db, 'Devices', id);
            await updateDoc(getDevices, {
                Device_Code: UpDeCode,
                Devices_IP: UpDeIp,
                Devices_Name: UpDeName,
                Devices_Service: UpSerVice,
            });
            console.log('Device updated successfully.');
        } catch (error) {
            console.error('Error updating device:', error);
        }
    };

    updateDevice();


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
                    <div className={Class.Right}>
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

                <Link to='/Device'>  <button type='button' >Huỷ</button></Link>
            </div>
            <div className={Class.BtnAdd}>
                <Link to='/Device'><button type='button' onClick={ }>Cập nhập</button></Link>
            </div>
        </div>
    )


};