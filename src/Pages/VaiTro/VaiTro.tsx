import React from 'react'
import Class from './VaiTro.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import Search from '../../components/Search'
import { Link } from 'react-router-dom'
import Add from '../../assets/img/Vector.png'


export default function VaiTro() {
    return (
        <div className={Class.VaiTro}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Box}>
                <div className={Class.Title}>
                    <h1>Danh sách vai trò</h1>
                </div>

                <div className={Class.Search}>
                    <Search></Search>
                </div>
                <table className={Class.TableVaiTro}>
                    <thead>
                        <tr>

                            <th style={{width: 20}}>
                                Tên vai trò
                            </th>
                            <th style={{width: 80}}>Số người dùng </th>
                            <th style={{width: 100}}>Mô tả</th>

                            <th style={{width: 80}}></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kế toán</td>

                            <td>6</td>
                            <td>Thực hiện nhiệm vụ thống kê số liệu và tổ hợp số liệu</td>

                            <td className={Class.link}><a href="/UpdateVaiTro">Cập nhật</a></td>

                        </tr>
                        <tr>
                            <td>Quản lý</td>

                            <td>6</td>
                            <td>Thực hiện nhiệm vụ thống kê số liệu và tổ hợp số liệu</td>

                            <td className={Class.link}><a href="/">Cập nhật</a></td>

                        </tr>
                        <tr>
                            <td>Lễ tân</td>

                            <td>6</td>
                            <td>Thực hiện nhiệm vụ thống kê số liệu và tổ hợp số liệu</td>

                            <td className={Class.link}><a href="/">Cập nhật</a></td>

                        </tr>
                        <tr>
                            <td>Quản lý</td>

                            <td>6</td>
                            <td>Thực hiện nhiệm vụ thống kê số liệu và tổ hợp số liệu</td>

                            <td className={Class.link}><a href="/">Cập nhật</a></td>

                        </tr>
                        <tr>
                            <td>Admin</td>

                            <td>6</td>
                            <td>Thực hiện nhiệm vụ thống kê số liệu và tổ hợp số liệu</td>

                            <td className={Class.link}><a href="/">Cập nhật</a></td>

                        </tr>
                        <tr>
                            <td>Superadmin</td>

                            <td>6</td>
                            <td>Thực hiện nhiệm vụ thống kê số liệu và tổ hợp số liệu</td>

                            <td className={Class.link}><a href="/">Cập nhật</a></td>

                        </tr>
                        



                    </tbody>
                </table>
                <div className={Class.Add}>
                    <img src={Add}></img>
                    <Link to='/AddVaiTro'> Thêm vai trò</Link>
                </div>
            </div>
        </div>
    )
}
