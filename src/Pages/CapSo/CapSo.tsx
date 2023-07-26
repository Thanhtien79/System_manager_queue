import React from 'react'
import { useState } from "react";
import Class from './CapSo.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import SelectDate from '../../components/SelectDate';
import Search from '../../components/Search';
import { Pagination } from 'antd'
import Vector from '../../assets/img/Vector.png'
import { Link } from 'react-router-dom'

export default function CapSo() {
    const [select1Value, setSelect1Value] = useState('option1');
    const [select2Value, setSelect2Value] = useState('option2');
    const [select3Value, setSelect3Value] = useState('option3');
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };

    const handleSelect2Change = (event: any) => {
        setSelect2Value(event.target.value);
    };
    const handleSelect3Change = (event: any) => {
        setSelect3Value(event.target.value);
    };
    return (
        <div className={Class.CapSo}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.ManagerCapSo}>
                <h1>Quản lý cấp số</h1>
                <div className={Class.NameService}>
                    <p>Tên dịch vụ</p>
                    <select id="option" value={select1Value} onChange={handleSelect1Change}>
                        <option value="option1">Tất cả</option>
                        <option value="option2">Khám sản - Phụ khoa</option>
                        <option value="option3">Khám răng hàm mặt</option>
                        <option value="option4">Khám tai mũi họng</option>
                    </select>
                </div>
                <div className={Class.Status}>
                    <p>Tình trạng</p>
                    <select id="option" value={select2Value} onChange={handleSelect2Change}>
                        <option value="option1">Tất cả</option>
                        <option value="option2">Đang chờ</option>
                        <option value="option3">Đã sử dụng</option>
                        <option value="option4">Bỏ qua</option>
                    </select>
                </div>
                <div className={Class.PowerSupplies}>
                    <p>Nguồn cấp</p>
                    <select id="option" value={select3Value} onChange={handleSelect3Change}>
                        <option value="option1">Tất cả</option>
                        <option value="option2">Kiosk</option>
                        <option value="option3">Hệ thống</option>

                    </select>
                </div>
                <div className={Class.SelectDay}>
                    <SelectDate></SelectDate>
                </div>
                <div className={Class.Search}>
                    <Search></Search>
                </div>
                <table className={Class.InfoCapso}>
                <thead>
                    <tr>
                        
                        <th>STT</th>
                        <th>Tên khách hàng</th>
                        <th>Tên dịch vụ</th>
                        <th>Thời gian cấp</th>
                        <th>Hạn sử dụng</th>
                        <th>Trạng thái</th>
                        <th>Nguồn cấp</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2010001</td>
                        <td>Lê Huỳnh ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Kiosk</td>
                        <td className={Class.link}><a href="/ManagerCapSo">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010002</td>
                        <td>Huỳnh ái vân</td>
                        <td>Khám sản -Phụ khoa</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnects}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Kiosk</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010003</td>
                        <td>Lê ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Hệ thống</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010004</td>
                        <td> ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Hệ thống</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010005</td>
                        <td>Lê Huỳnh ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnectss}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Kiosk</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010006</td>
                        <td>Lê Huỳnh ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Kiosk</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010007</td>
                        <td>Lê Huỳnh ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnectss}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Kiosk</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010008</td>
                        <td>Lê Huỳnh ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Hệ thống</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                    <tr>
                        <td>2010009</td>
                        <td>Lê Huỳnh ái vân</td>
                        <td>Khám tim mạch</td>
                        <td>14:35 - 07/11/2021</td>
                        <td>14:35 - 12/11/2021</td>
                        <td>
                            <div className={Class.statusConnect}>
                                <span className={Class.actionsConnect}></span>
                                <p className={Class.titleConnect}>Đang chờ</p>
                            </div>
                        </td>
                        <td>Kiosk</td>
                        <td className={Class.link}><a href="">Chi tiết</a></td>
                     
                    </tr>
                 
                   
         
                
                </tbody>
            </table>
            <div className={Class.Pagination}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className={Class.AddDevice}>
                <img src={Vector}></img>
                <Link to='/Number'> Cấp số mới</Link>
            </div>


            </div>
        </div>
    )
}
