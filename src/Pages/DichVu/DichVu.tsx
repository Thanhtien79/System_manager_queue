import React from 'react'
import { useState } from "react";
import Class from './DichVu.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'

import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import Vector from '../../assets/img/Vector.png'



export default function Device() {
    const [select1Value, setSelect1Value] = useState('option1');

    const { Search } = Input;
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };


    const onSearch = (value: string) => console.log(value);
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className={Class.Device}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Title}>
                <h1>Quản lý dịch vụ</h1>
            </div>
            <div className={Class.Dropdown}>
                <p>Trạng thái hoạt động</p>
                <select id="option1" value={select1Value} onChange={handleSelect1Change}>
                    <option value="option1">Tất cả</option>
                    <option value="option2">Hoạt động</option>
                    <option value="option3">Ngưng hoạt động</option>
                </select>

            </div>
            <div className={Class.DateStart}>
                <p>Chọn thời gian</p>
                <DatePicker onChange={onChange} style={{
                    top: 185, left: 550, height: 44
                }} />
            </div>
            <div className={Class.IconNext}>
                <CaretRightOutlined />
            </div>
            <div className={Class.DateEnd}>
                <DatePicker onChange={onChange} style={{
                    top: 141, left: 750, height: 44
                }} />
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
                        <th>Mã dịch vụ</th>
                        <th>Tên dịch vụ</th>
                        <th>Mô tả</th>
                        <th style={{ width: '120px' }}>Trạng thái hoạt động</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Ngưng hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Ngưng hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>
                        <td>Kiosk</td>
                        <td>Hoạt động</td>

                        <td>
                            <div className={Class.statusConnect}>
                            <span className={Class.actionsSuccess}></span>
                            <p className={Class.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                        <td className={Class.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                    
         
                
                </tbody>
            </table>

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

