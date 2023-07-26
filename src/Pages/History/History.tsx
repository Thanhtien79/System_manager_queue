import React from 'react'
import Class from './History.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import SelectDate from '../../components/SelectDate'
import Search from '../../components/Search'
import { Pagination } from 'antd'
export default function History() {
  return (
    <div className={Class.History}>
        <MenuBar></MenuBar>
        <TopBar></TopBar>
        <div className={Class.Date}>
            <SelectDate></SelectDate>
        </div>
        <div className={Class.Search}>
            <Search></Search>
        </div>
        <table className={Class.TableHistory}>
                    <thead>
                        <tr>

                            <th style={{width: 20}}>
                                Tên đăng nhập
                            </th>
                            <th style={{width: 80}}>Thời gian tác động </th>
                            <th style={{width: 50}}>IP thực hiện</th>

                            <th style={{width: 50}}>Thao tác thực hiện</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                        <tr>
                            <td>Tuyetnguyen@12</td>

                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>

                            <td>Cập nhật thông tin dịch vụ DV_01</td>

                        </tr>
                      


                    </tbody>
                </table>
                <div className={Class.Pagination}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
    </div>
  )
}
