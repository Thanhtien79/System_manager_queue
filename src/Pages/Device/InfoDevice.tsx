import React from 'react'
import Class from './InfoDevice.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import Edit from '../../assets/img/Edit Square.png'
import { Link } from 'react-router-dom';
export default function ManagerDevice() {
  return (
    <div className={Class.ManagerDevice}>
      <MenuBar></MenuBar>
      <TopBar></TopBar>
      <div className={Class.Title}>
        <h1>Quản lý thiết bị</h1>
      </div>
      <div className={Class.Info}>
        <div className={Class.Titles}>
          <h1>Thông tin thiết bị</h1>
        </div>
        <div className={Class.TitleInfoRight}>
          <div className={Class.Right}>
            <span className={Class.MenuTitle}>Mã thiết bị:</span>
            <span className={Class.InfoTitle}> KIO_01</span>
          </div>
          <div className={Class.Rights}>
            <span className={Class.MenuTitle}>Tên thiết bị:</span>
            <span className={Class.InfoTitle}> Kiosk</span>
          </div>
          <div className={Class.Rightss}>
            <span className={Class.MenuTitle}>Địa chỉ IP:</span>
            <span className={Class.InfoTitle}>128.172.308</span>
          </div>
        </div>
        <div className={Class.TitleInfoLeft}>
          <div className={Class.Left}>
            <span className={Class.MenuTitle}>Loại thiết bị:</span>
            <span className={Class.InfoTitle}> Kiosk</span>
          </div>
          <div className={Class.Lefts}>
            <span className={Class.MenuTitle}>Tên đăng nhập:</span>
            <span className={Class.InfoTitle}> Linhkyo011</span>
          </div>
          <div className={Class.Leftss}>
            <span className={Class.MenuTitle}>Mật khẩu:</span>
            <span className={Class.InfoTitle}> CMS</span>
          </div>
        </div>
        <div className={Class.Inline}>
          <span className={Class.MenuTitle}>Dịch vị sử dụng:</span>
          <span className={Class.InfoTitles}> Khám tim mạch, Khám sản - Phụ khoa,Khám răng hàm mặt, Khám tai mũi họng, khám hô hấp, Khám tổng quát.</span>
        </div>
        <div className={Class.EditDevice}>
          <img src={Edit}></img>
          <Link to='/EditDevice'> Cập nhập thiết bị</Link>
        </div>
      </div>

    </div>
  )
}
