import React from 'react'
import { useState } from 'react'
import Class from './Report.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import SelectDate from '../../components/SelectDate'
import { Pagination } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import Download from '../../assets/img/document-download.png';
import { Link } from 'react-router-dom'

export default function Report() {
    const [select1Value, setSelect1Value] = useState('option1');
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };
    return (
        <div className={Class.Report}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>

            <div className={Class.BoxReport}>

                <div className={Class.Date}>
                    <SelectDate></SelectDate>
                </div>
                <table className={Class.TableReport}>
                    <thead>
                        <tr>

                            <th>
                                STT<FontAwesomeIcon icon={faArrowsUpDown}></FontAwesomeIcon>
                            </th>
                            <th>Tên dịch vụ  <FontAwesomeIcon icon={faArrowsUpDown} /> </th>
                            <th>Thời gian cấp <FontAwesomeIcon icon={faArrowsUpDown} /></th>
                            <th>Tình trạng <FontAwesomeIcon icon={faArrowsUpDown} /></th>
                            <th>Nguồn cấp <FontAwesomeIcon icon={faArrowsUpDown} /></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2010001</td>

                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>

                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Kiosk</td>

                        </tr>
                        <tr>
                            <td>2010002</td>

                            <td>Khám sản -Phụ khoa</td>
                            <td>14:35 - 07/11/2021</td>

                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnects}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Kiosk</td>


                        </tr>
                        <tr>
                            <td>2010003</td>
                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Hệ thống</td>

                        </tr>
                        <tr>
                            <td>2010004</td>
                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Hệ thống</td>

                        </tr>
                        <tr>
                            <td>2010005</td>
                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnectss}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Kiosk</td>

                        </tr>
                        <tr>
                            <td>2010006</td>
                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Kiosk</td>

                        </tr>
                        <tr>
                            <td>2010007</td>
                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnectss}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Kiosk</td>

                        </tr>
                        <tr>
                            <td>2010008</td>
                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Hệ thống</td>

                        </tr>
                        <tr>
                            <td>2010009</td>
                            <td>Khám tim mạch</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>
                                <div className={Class.statusConnect}>
                                    <span className={Class.actionsConnect}></span>
                                    <p className={Class.titleConnect}>Đang chờ</p>
                                </div>
                            </td>
                            <td>Kiosk</td>

                        </tr>




                    </tbody>
                </table>
                <div className={Class.Pagination}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
                <div className={Class.Download}>
                    <img src={Download}></img>
                    <Link to='/AddDichVu'> Tải về</Link>
                </div>
            </div>
        </div>
    )
}
