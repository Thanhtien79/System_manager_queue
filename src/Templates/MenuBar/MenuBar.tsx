import React from 'react'
import LogoAlta from '../../assets/img/Logo alta.png'
import Class from './MenuBar.module.css'
import DashBoard from '../../assets/img/element4.png'
import ThietBi from '../../assets/img/monitor.png'
import DichVu from '../../assets/img/Frame332.png'
import CapSo from '../../assets/img/icon3.png'
import BaoCao from '../../assets/img/Frame1.png'
import CaiDat from '../../assets/img/setting.png'
import { LoginOutlined, MoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
export default function MenuBar() {
  return (
    <div className={Class.ListMenuBar}>
      <div className={Class.Logo}>
        <img src={LogoAlta}></img>
      </div>
      <div className={Class.MenuBar}>
        <div className={Class.ItemDashBoard} >
          <img src={DashBoard}></img>
          <Link to="/DashBoard">DashBoard</Link>
        </div>
        <div className={Class.ItemThiebi} >
          <img src={ThietBi}></img>
          <Link to="/Device">Thiết bị</Link>
        </div>
        <div className={Class.ItemDichvu} >
          <img src={DichVu}></img>
          <a>Dịch vụ</a>
        </div>
        <div className={Class.ItemCapso} >
          <img src={CapSo}></img>
          <a>Cấp số</a>
        </div>
        <div className={Class.ItemBaocao} >
          <img src={BaoCao}></img>
          <a>Báo cáo</a>
        </div>
        <div className={Class.ItemCaidat} >
          <img src={CaiDat}></img>
          <a >Cài đặt thiết bị <MoreOutlined /></a>

        </div>
        <div className={Class.ButtonLogout} >
          <Link to="/login"  >
         
            <button> <LoginOutlined />  Đăng Xuất</button>
          </Link>
        </div>

      </div>

    </div>




  )
}
