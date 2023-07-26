import { useState } from 'react'
import Class from './AddDichVu.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { Button, Input, Space, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where, onSnapshot, CollectionReference, Query, DocumentData, addDoc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig/FireBase';
import { flattenDiagnosticMessageText } from 'typescript';
import { Link } from 'react-router-dom'
export default function AddDichVu() {
    
    const [serviceCode, setServiceCode] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [serviceDes, setServiceDes] = useState("");
    const [serviceStatus, setServiceStatus] = useState(2);
    const [serviceIncrease, setServiceIncrease] = useState({ from: 0, to: 0 });
    const [prefix, setPrefix] = useState(0);
    const [surfix, setSurfix] = useState(0);
    const handleFromChange = (e:any) => {
        setServiceIncrease((prevValue) => ({
          ...prevValue,
          from: e.target.value,
        }));
    };
    const handleToChange = (e:any) => {
        setServiceIncrease((prevValue) => ({
          ...prevValue,
          to: e.target.value,
        }));
    };
    const colRef = collection(db, "Service");
    const navigate = useNavigate();
    const addService = async () => {
        if(serviceCode === '' || serviceName === '' || serviceDes === ''){
            alert("Vui lòng nhập đủ các trường!!!");
        }else{
            await addDoc(colRef, {
                service_code: serviceCode,
                service_name: serviceName,
                service_des: serviceDes,
                service_status: serviceStatus,
                service_increase: serviceIncrease,
                service_prefix: prefix,
                service_surfix: surfix
            })
            alert('Thêm dịch vụ thành công');
            navigate("/manage-service");
        }
    }
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const { TextArea } = Input;

    const ClickChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };

    return (
        <div className={Class.AddDichVu}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Title}>
                <h1>Quản lý dịch vụ</h1>
            </div>
            <div className={Class.BoxAdd}>
                <h1>Thông tin dịch vụ</h1>
                <div className={Class.BoxLeft}>
                    <div className={Class.Code}>
                        <span className={Class.Title}>Mã dịch vụ: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder="" onChange={(e) => setServiceCode(e.target.value)} />
                    </div>
                    <div className={Class.NameCode}>
                        <span className={Class.Title}>Tên dịch vụ: </span>
                        <span className={Class.Icon} >*</span>
                        <Input placeholder='Khám tim mạch'  onChange={(e) => setServiceName(e.target.value)}/>
                    </div>
                </div>
                <div className={Class.BoxRight}>
                    <div className={Class.Descrip}>
                        <span className={Class.Title}>Mô tả: </span>
                        <TextArea
                            showCount
                            maxLength={500}
                            style={{ height: 120, width: 550, top: 5, resize: 'none' }}
                            onChange={ClickChange}
                            placeholder="Mô tả dịch vụ"
                        />
                    </div>
                </div>
                <div className={Class.BoxUnder}>
                    <h1>Quy tắc cấp số</h1>

                    <div className={Class.Option}>

                        <div className={Class.StyleOption}>
                            <div className={Class.Options}>
                                <label> <Checkbox onChange={onChange}>Tăng tự động từ: </Checkbox></label>

                            </div>
                            <div className={Class.Options1}>
                                <div className={Class.rangeTitle}>
                                    <p>0001</p>
                                </div>
                                <p className={Class.titleBox1}>đến</p>
                                <div className={Class.rangeTitle}>
                                    <p>9999</p>
                                </div>

                            </div>
                            <div className={Class.Options}>
                                <Checkbox onChange={onChange}>Prefix: </Checkbox>


                            </div>
                            <div className={Class.Options1}>
                                <div className={Class.rangeTitle}>
                                    <p>0001</p>
                                </div>
                            </div>
                            <div className={Class.Options}>
                                <Checkbox onChange={onChange}>Surfix: </Checkbox>

                            </div>
                            <div className={Class.Options1}>
                                <div className={Class.rangeTitle}>
                                    <p>0001</p>
                                </div>
                            </div>
                        </div>


                        <div className={Class.Options}>
                            <Checkbox onChange={onChange}>Reset mỗi ngày</Checkbox>
                        </div>

                        <div className={Class.Note}>
                            <span className={Class.Icon}>*</span>
                            <span className={Class.Titles}>Là trường thông tin bắt buộc</span>
                        </div>
                    </div>
                    <div className={Class.BtnCance}>

                        <Link to='/Login'>  <button type='button' >Huỷ bỏ</button></Link>
                    </div>
                    <div className={Class.BtnAdd}>
                        <Link to='/SetPass'><button type='button' >Thêm dịch vụ</button></Link>
                    </div>





                </div>
            </div>
        </div>
    )
}
