import React from 'react'
import Class from './AddCapso.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
export default function ManagerCapSo() {
    const [select1Value, setSelect1Value] = useState('option1');
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };
    return (
        <div className={Class.ManagerCapSo}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Title}>
                <h1>Quản lý cấp số</h1>
            </div>
            <div className={Class.BoxCapSo}>
                <h1>CẤP SỐ MỚI</h1>
                <h3>Dịch vụ khách hàng lựa chọn</h3>
                <div className={Class.Option}>
                    <select id="option" value={select1Value} onChange={handleSelect1Change}>
                            
                        <option disabled={true} value="option1">Chọn dịch vụ </option>
                        <option value="option2">Khám tim mạch</option>
                        <option value="option3">Khám sản - Phụ khoa</option>
                        <option value="option4">Khám răng hàm mặt</option>
                        <option value="option5">Khám tai mũi họng</option>
                    </select>
                </div>
                <div className={Class.BtnCance}>

                    <Link to='/CapSo'>  <button type='button' >Huỷ bỏ</button></Link>
                </div>
                <div className={Class.BtnPrint}>
                    <Link to='/Number'><button type='button' >In số</button></Link>
                </div>
            </div>

        </div>
    )
}
