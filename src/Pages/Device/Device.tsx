import React, { useEffect } from 'react'
import { useState } from "react";
import Class from './Device.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { RightOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Vector from '../../assets/img/Vector.png'
import { db } from '../../FireBaseConfig/FireBase'
import { collection,getDocs } from '@firebase/firestore';
import GetDevice from './GetDevice';

export default function Device() {
    const [devices,setDevices] = useState ([]);
    const deColRef = collection ( db,"Devices");
    useEffect(()=>{
        const getDevices= async () =>{
         const data: any= await getDocs(deColRef);
         setDevices(data.docs.map((doc:any) =>({...doc.data(), id: doc.id})));

        };
        getDevices() ;
    },[])
  
    const [select1Value, setSelect1Value] = useState('option1');
    const [select2Value, setSelect2Value] = useState('option2');
    const { Search } = Input;
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };

    const handleSelect2Change = (event: any) => {
        setSelect2Value(event.target.value);
    };

    const onSearch = (value: string) => console.log(value);
    return (
        <div className={Class.Device}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Title}>
                <h1>Danh sách thiết bị</h1>
            </div>
            <div className={Class.Dropdown}>
                <p>Trạng thái hoạt động</p>
                <select id="option1" value={select1Value} onChange={handleSelect1Change}>
                    <option value="option1">Tất cả</option>
                    <option value="option2">Hoạt động</option>
                    <option value="option3">Ngưng hoạt động</option>
                </select>

            </div>
            <div className={Class.DropdownConect}>
                <p>Trạng thái kết nối</p>
                <select id="option2" value={select2Value} onChange={handleSelect2Change}>
                    <option value="option4">Tất cả</option>
                    <option value="option5">Kết nối</option>
                    <option value="option6">Mất kết nối</option>
                </select>

            </div>
            <div className={Class.SearchBar}>
                <p>Từ khoá</p>
                <Search id="Search" placeholder="" allowClear onSearch={onSearch} style={{
                    width: 300, height: 44,
                }} />
            </div>
           <div className={Class.TableDevice}>
            <GetDevice></GetDevice>
           </div>
            <div className={Class.Pagination}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className={Class.AddDevice}>
            <img src={Vector}></img>
            <Link to='/AddDevice'> Thêm thiết bị</Link>
            </div>



        </div>

    )
}
