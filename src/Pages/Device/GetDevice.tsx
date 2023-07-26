import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Class from './Device.module.css';

import { collection, getDocs, query, where, onSnapshot, CollectionReference, Query, DocumentData } from 'firebase/firestore';
import { db } from '../../FireBaseConfig/FireBase';


export default function GetDevice() {
  const [devices, setDevices] = useState([]);
  const deColRef = collection(db, "Devices");
  useEffect(() => {
    const getDevices = async () => {
      const data: any = await getDocs(deColRef);
      setDevices(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));

    };
    getDevices();
  }, [])
  return (
    <div>
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
          { devices.length > 0 && devices.map((Devices: any) => (
          <tr key={Devices.id}>
            <td>{Devices.Device_Code}</td>
            <td>{Devices.Devices_Name}</td>
            <td>{Devices.Devices_IP}</td>
            <td className={Class.status}>
              <span className={Class.actionsSuccess}></span>
              <p className={Class.title}>Ngưng hoạt động</p>
            </td>
            <td>
              <div className={Class.statusConnect}>
                <span className={Class.actionsSuccess}></span>
                <p className={Class.titleConnect}>Mất kết nối</p>
              </div>
            </td>
            <td>
              <p className={Class.element}>{Devices.Devices_Service}</p>
              <a href="" className={Class.linkUpdate}>Xem thêm</a>
            </td>
            <td className={Class.link}><Link to="/InfoDevice">Chi tiết</Link></td>
            <td className={Class.linkUpdate}><Link to="/EditDevice">Cập nhật</Link></td>
          </tr>))}


        </tbody>
      </table>

    </div>
  )
}
