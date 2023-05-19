import React from 'react'
import { useState } from 'react'
import Class from './InfoDichVu.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import EditSevice  from '../../assets/img/Edit Square.png'
import Back  from '../../assets/img/Back.png'
import { Link } from 'react-router-dom';

export default function InfoDichVu() {
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
        <div className={Class.InfoDichVu}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <h1>Quản lý dịch vụ</h1>
            <div className={Class.InfoLeft}>
                <h1>Thông tin dịch vụ</h1>
                <div className={Class.InfoBox}>
                    <div className={Class.Info1}>
                        <span className={Class.NameCode}>Mã dịch vụ:
                        </span>
                        <span className={Class.Title}>201</span>
                    </div>
                    <div className={Class.Info1}>
                        <span className={Class.NameCode}>Tên dịch vụ:
                        </span>
                        <span className={Class.Title}>Khám tim mạch</span>
                    </div>
                    <div className={Class.Info1}>
                        <span className={Class.NameCode}>Mô tả:
                        </span>
                        <span className={Class.Title}>Chuyên các bệnh lý về tim</span>
                    </div>
                </div>
                <div className={Class.InfoUnder}>
                    <h2>Quy tắc cấp số</h2>
                    <div className={Class.Option}>
                        <p className={Class.NameCode}>Tăng tự động từ: </p>
                        <div className={Class.rangeTitle}>
                            <p>0001</p>
                        </div>
                        <p className={Class.NameCode}>đến</p>
                        <div className={Class.rangeTitle}>
                            <p>9999</p>
                        </div>
                    </div>
                    <div className={Class.Option}>
                        <p className={Class.NameCode}>Prefix: </p>
                        <div className={Class.rangeTitles}>
                            <p>0001</p>
                        </div>
                    </div>
                    <div className={Class.Option}>
                        <p className={Class.NameCode}>Reset mỗi ngày </p>
                    </div>
                    <div className={Class.Options}>
                        <p className={Class.NameCodes}>ví dụ: 201-2001 </p>
                    </div>
                </div>

            </div>
            <div className={Class.InfoRight}>
                <div className={Class.Dropdown}>
                    <p>Trạng thái</p>
                    <select id="option1" value={select1Value} onChange={handleSelect1Change}>
                        <option value="option1">Tất cả</option>
                        <option value="option2">Đã hoàn thành</option>
                        <option value="option3">Đã thực hiện</option>
                        <option value="option4">vắng</option>
                    </select>

                </div>
                <div className={Class.DateStart}>
                    <p>Chọn thời gian</p>
                    <DatePicker onChange={onChange} style={{
                        top: 44, left: 196, height: 45, width: 125,
                    }} />
                </div>
                <div className={Class.IconNext}>
                    <CaretRightOutlined />
                </div>
                <div className={Class.DateEnd}>
                    <DatePicker onChange={onChange} style={{
                        top: 0, left: 350, height: 45,width:125,
                    }} />
                </div>
                <div className={Class.SearchBar}>
                    <p>Từ khoá</p>
                    <Search id="Search" placeholder="Nhập từ khoá" allowClear onSearch={onSearch} style={{
                        width: 225, height: 45,
                    }} />
                </div>
                <table className={Class.Table}>
                    <thead>
                        <tr>
                            <th>Số thứ tự</th>
                            <th style={{ width: '100px' }}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2010001</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đã hoàn thành</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2010002</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đã hoàn thành</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2010003</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnects}></span>
                                    <p className={Class.titleConnect}>Đang thực hiện</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2010004</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnectss}></span>
                                    <p className={Class.titleConnect}>Vắng</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2010005</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đã hoàn thành</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2010006</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnects}></span>
                                    <p className={Class.titleConnect}>Đã thực hiện</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2010007</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnectss}></span>
                                    <p className={Class.titleConnect}>Vắng</p>
                                </div>
                            </td>
                        </tr>




                    </tbody>
                </table>

                <div className={Class.Pagination}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            <div className={Class.EditService}>
                <img src={EditSevice}></img>
                <Link to='/UpdateDichVu'> Cập nhập danh sách</Link>
            </div>
            <div className={Class.Back}>
                <img src={Back}></img>
                <Link to='/DichVu'> Quay lại</Link>
            </div>

        </div>
    )
}
