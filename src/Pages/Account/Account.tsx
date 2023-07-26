import React from 'react'
import { useState } from 'react'
import Class from './Account.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import Search from '../../components/Search'
import { Pagination } from 'antd'
import Vector from '../../assets/img/Vector.png'
import { Link } from 'react-router-dom'
export default function Account() {
    const [select1Value, setSelect1Value] = useState('option1');


    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };
    return (
        <div className={Class.Account}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Title}>
                <h1>Danh sách tài khoản</h1>

            </div>
            <div className={Class.Dropdown}>
                <p>Tên vai trò</p>
                <select id="option1" value={select1Value} onChange={handleSelect1Change}>
                    <option value="option1">Tất cả</option>
                    <option value="option2">Kế toán</option>
                    <option value="option3">Quản lý</option>
                    <option value="option4">Admin</option>
                </select>

            </div>
            <div className={Class.Search }>
                <Search></Search>
            </div>
            <table className={Class.InfoAccount}>
                <thead>
                    <tr>

                        <th>Tên đăng nhập</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Vai trò</th>
                        <th>Trạng thái hoạt động</th>
             
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn A</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/UpdateAccount">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn B</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnects}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn C</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnects}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn D</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn E</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnects}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn F</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn G</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn H</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnects}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
                    <tr>
                        <td>Tuyentnguyen@12</td>
                        <td>Nguyen văn H</td>
                        <td>0919256712</td>
                        <td>thuyenguyen123@gmial.com</td>
                        <td>Kế toán</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnects}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                     
                        <td className={Class.link}><a href="/ManagerCapSo">Cập nhật</a></td>

                    </tr>
       
                </tbody>
            </table>
            <div className={Class.Pagination}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className={Class.AddDevice}>
                <img src={Vector}></img>
                <Link to='/AddAccount'> Thêm tài khoản</Link>
            </div>
        </div>
    )
}
