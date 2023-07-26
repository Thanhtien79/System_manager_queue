import React, { Children } from 'react'
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
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Menu } from 'antd';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from '../../FireBaseConfig/FireBase'
export default function MenuBar() {
  const logout = async () => {
    await signOut(auth);
  };
  const items = [
    {
      key: '1',
      type: 'group',
      children: [
        {
          key: '1-1',
          label: 'Quản lý vai trò',
          Link: '/VaiTro',

        },
        {
          key: '1-2',
          label: 'Quản lý tài khoản',
          Link: '/Account',
        },
        {
          key: '1-3',
          label: 'Nhật ký người dùng',
          Link: 'History',
        },
      ],
    }
  ]

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
          <Link to="/DichVu">Dịch vụ</Link>
        </div>
        <div className={Class.ItemCapso} >
          <img src={CapSo}></img>
          <Link to="/CapSo">Cấp số</Link>
        </div>
        <div className={Class.ItemBaocao} >
          <img src={BaoCao}></img>
          <Link to="/Report">Báo cáo</Link>
        </div>
        <div className={Class.ItemCaidat} >
          <img src={CaiDat}></img>
          <Dropdown
            overlay={
              <Menu>
                {items.map((group) => (
                  <Menu.ItemGroup key={group.key}>
                    {group.children.map((item) => (
                      <Menu.Item key={item.key}>
                        <a href={item.Link}>{item.label}</a>
                      </Menu.Item>
                    ))}
                  </Menu.ItemGroup>
                ))}
              </Menu>
            }
          >
            <a href="/" onClick={(e) => e.preventDefault()}>
              <Space>
                Cài đặt hệ thống
                <MoreOutlined />
              </Space>
            </a>
          </Dropdown>

        </div>
        <div className={Class.ButtonLogout} >
          <Link to="/login"  >

          <button onClick={logout}> <LoginOutlined />  Đăng Xuất</button>
          </Link>
          
        </div>

      </div>

    </div>




  )
}
