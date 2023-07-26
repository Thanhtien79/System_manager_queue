import React from 'react'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import Class from './ManagerCapso.module.css'
import Back  from '../../assets/img/Back.png'
import { Link } from 'react-router-dom';
export default function ManagerCapSo() {
    return (
        <div className={Class.ManagerDevice}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Title}>
                <h1>Quản lý cấp số</h1>
            </div>
            <div className={Class.Info}>
                <div className={Class.Titles}>
                    <h1>Thông tin cấp số</h1>
                </div>
                <div className={Class.TitleInfoRight}>
                    <div className={Class.Right}>
                        <span className={Class.MenuTitle}>Họ tên:</span>
                        <span className={Class.InfoTitle}> Nguyễn Thị Dung</span>
                    </div>
                    <div className={Class.Rights}>
                        <span className={Class.MenuTitle}>Tên dịch vụ:</span>
                        <span className={Class.InfoTitle}> Khám tim mạch</span>
                    </div>
                    <div className={Class.Rightss}>
                        <span className={Class.MenuTitle}>Số thứ tự:</span>
                        <span className={Class.InfoTitle}> 2001201</span>
                    </div>
                    <div className={Class.Rightsss}>
                        <span className={Class.MenuTitle}>Thời gian cấp:</span>
                        <span className={Class.InfoTitle}> 14:35 - 07/11/2021</span>
                    </div>
                    <div className={Class.Rightssss}>
                        <span className={Class.MenuTitle}>Hạn sử dụng:</span>
                        <span className={Class.InfoTitle}> 18:00 - 07/11/2021</span>
                    </div>
                </div>
                <div className={Class.TitleInfoLeft}>
                    <div className={Class.Left}>
                        <span className={Class.MenuTitle}>Nguồn cấp:</span>
                        <span className={Class.InfoTitle}> Kiosk</span>
                    </div>
                    <div className={Class.Lefts}>
                        <span className={Class.MenuTitle}>Trạng thái:</span>
                        <div className={Class.statusConnect}>
                            <span className={Class.actionsConnect}></span>
                            <p className={Class.titleConnect}> Đang chờ</p>
                        </div>

                    </div>
                    <div className={Class.Leftss}>
                        <span className={Class.MenuTitle}>Số điện thoại:</span>
                        <span className={Class.InfoTitle}> 0948523623</span>
                    </div>
                    <div className={Class.Leftsss}>
                        <span className={Class.MenuTitle}>Địa chỉ Email:</span>
                        <span className={Class.InfoTitle}> nguyendung@gmail.com</span>
                    </div>
                </div>
                <div className={Class.Back}>
                <img src={Back}></img>
                <Link to='/CapSo'> Quay lại</Link>
            </div>
            </div>
        </div>
    )
}
