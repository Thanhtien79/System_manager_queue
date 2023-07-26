import { useState } from 'react'
import Class from './Update.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import { Button, Input, Space, Checkbox } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { collection,doc, getDoc, getDocs, query, where, onSnapshot, CollectionReference, Query, DocumentData, addDoc ,updateDoc} from 'firebase/firestore';
import { db } from '../../FireBaseConfig/FireBase';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { flattenDiagnosticMessageText } from 'typescript';
import { Link } from 'react-router-dom'
export default function AddDichVu() {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const { TextArea } = Input;

    const ClickChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };
    const {id} = useParams();
    const [serviceCode, setServiceCode] = useState("");
    const [serviceCodeUpdate, setServiceCodeUpdate] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [serviceNameUpdate, setServiceNameUpdate] = useState("");
    const [serviceDes, setServiceDes] = useState("");
    const [serviceDesUpdate, setServiceDesUpdate] = useState("");
    const [serviceIncreaseFrom, setServiceIncreaseFrom] = useState("")
    const [serviceIncreaseTo, setServiceIncreaseTo] = useState("")
    const [serviceIncreaseUpdate, setServiceIncreaseUpdate] = useState({from: 0, to: 0})
    const [preFix, setPrefix] = useState(0)
    const [surFix, setSurfix] = useState(0)
    const navigate = useNavigate();
    if(!id) return null;
    const docRef = doc(db, "Service", id);
    const getId = async () => {
        const service = await getDoc(docRef);
        if(service.exists()){
            setServiceCode(service.data()?.service_code);
            setServiceName(service.data()?.service_name);
            setServiceDes(service.data()?.service_des);
            setServiceIncreaseFrom(service.data()?.service_increase.from);
            setServiceIncreaseTo(service.data()?.service_increase.to);
            setPrefix(service.data()?.service_prefix);
            setSurfix(service.data()?.service_surfix);
        }
    }
    getId()
    const handleFromChange = (e:any) => {
        setServiceIncreaseUpdate((prevValue) => ({
          ...prevValue,
          from: e.target.value,
        }));
    };
    const handleToChange = (e:any) => {
        setServiceIncreaseUpdate((prevValue) => ({
          ...prevValue,
          to: e.target.value,
        }));
    };
    const update = async () => {
        const updatedServiceCode = serviceCodeUpdate || serviceCode;
        const updatedServiceName = serviceNameUpdate || serviceName;
        const updatedServiceDes = serviceDesUpdate || serviceDes;
        let updatedServiceIncrease;
        if (serviceIncreaseUpdate) {
          updatedServiceIncrease = serviceIncreaseUpdate;
        } else if (serviceIncreaseFrom || serviceIncreaseTo) {
          updatedServiceIncrease = serviceIncreaseFrom || serviceIncreaseTo;
        }
        await updateDoc(docRef, {
            service_code: updatedServiceCode,
            service_name: updatedServiceName,
            service_des: updatedServiceDes,
            service_increase: updatedServiceIncrease,
          });
          alert("Cập nhật thành công!!!");
          navigate('/manage-service');
    }

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
                        <Input placeholder='201' />
                    </div>
                    <div className={Class.NameCode}>
                        <span className={Class.Title}>Tên dịch vụ: </span>
                        <span className={Class.Icon} >*</span>
                        <Input placeholder='Khám tim mạch' />
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
                        <Link to='/SetPass'><button type='button' >Cập nhập</button></Link>
                    </div>





                </div>
            </div>
        </div>
    )
}
