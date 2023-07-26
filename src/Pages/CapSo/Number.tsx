import React from 'react'
import Class from './Number.module.css'
import Close from '../../assets/img/fi_x.png'
import { Link } from 'react-router-dom'
export default function Number() {
    return (
        <div className={Class.Number}>
            <div className={Class.Icon} >
                <Link to='/CapSo'> <img src={Close} alt="" /></Link>
            </div>
            <div className={Class.Threerows}>
                <div className={Class.Rows}>Số thứ tự được cấp</div>
                <div className={Class.Rowss}>2001201</div>
                <span className={Class.Rowsss}>DV: Khám răng hàm mặt </span>
                <span className={Class.Row2}>( tại quầy số 1 )</span>
            </div>
            <div className={Class.Tworows}>
                <div className={Class.Row1}>Thời gian cấp: 09:30 11/10/2021</div>
                <div className={Class.Row1}>Hạn sử dụng: 17:30 11/10/2021</div>
            </div>
        </div>
    )
}
