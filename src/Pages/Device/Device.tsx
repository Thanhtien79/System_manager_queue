import React from 'react'
import { useState } from "react";
import Class from './Device.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { RightOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';


export default function Device() {
    const [select1Value, setSelect1Value] = useState('option1');
    const [select2Value, setSelect2Value] = useState('option1');
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
            <table>
                <thead>
                    <tr>
                        <th>Mã thiết bị</th>
                        <th>Tên thiết bị</th>
                        <th>Địa chỉ IP</th>
                        <th style={{ width: '120px' }}>Trạng thái hoạt động</th>
                        <th>Trạng thái kết nối</th>
                        <th style={{ width: '100px' }}>Dịch vụ sử dụng</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>192.168.1.10</td>
                        <td className={Class.status}>
                            <span className={Class.actions}></span>
                            <p className={Class.title}>Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={Class.element}>Khám tim mạch, Khám mắt</p>
                            <a href="" className={Class.linkUpdate}>Xem thêm</a>
                        </td>
                        <td className={Class.link}><Link to="/details-device">Chi tiết</Link></td>
                        <td className={Class.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>192.168.1.10</td>
                        <td className={Class.status}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                        </td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsSuccess}></span>
                                <p className={Class.titleSuccess}>Kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={Class.element}>Khám tim mạch, Khám mắt</p>
                            <a href="" className={Class.linkUpdate}>Xem thêm</a>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>192.168.1.10</td>
                        <td className={Class.status}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                        </td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={Class.element}>Khám tim mạch, Khám mắt</p>
                            <a href="" className={Class.linkUpdate}>Xem thêm</a>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>192.168.1.10</td>
                        <td className={Class.status}>
                            <span className={Class.actions}></span>
                            <p className={Class.title}>Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={Class.element}>Khám tim mạch, Khám mắt</p>
                            <a href="" className={Class.linkUpdate}>Xem thêm</a>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>192.168.1.10</td>
                        <td className={Class.status}>
                            <span className={Class.actions}></span>
                            <p className={Class.title}>Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={Class.element}>Khám tim mạch, Khám mắt</p>
                            <a href="" className={Class.linkUpdate}>Xem thêm</a>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>192.168.1.10</td>
                        <td className={Class.status}>
                            <span className={Class.actions}></span>
                            <p className={Class.title}>Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={Class.element}>Khám tim mạch, Khám mắt</p>
                            <a href="" className={Class.linkUpdate}>Xem thêm</a>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>192.168.1.10</td>
                        <td className={Class.status}>
                            <span className={Class.actions}></span>
                            <p className={Class.title}>Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={Class.element}>Khám tim mạch, Khám mắt</p>
                            <a href="" className={Class.linkUpdate}>Xem thêm</a>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                </tbody>
            </table>

            <div className={Class.Pagination}>
                <Pagination defaultCurrent={1} total={50} />
            </div>



        </div>

    )
}
