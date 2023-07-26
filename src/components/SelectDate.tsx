import React from 'react'
import Class from './SelectDate.module.css'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
export default function SelectDate() {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (

        <div className={Class.SelectDate}>
            <div className={Class.DateStart}>
                <p>Chọn thời gian</p>
                <DatePicker onChange={onChange} style={{
                    top: 30, left: 1, height: 44
                }} />
            </div>
            <div className={Class.IconNext}>
                <CaretRightOutlined />
            </div>
            <div className={Class.DateEnd}>
                <DatePicker onChange={onChange} style={{
                    top: -29, left: 180, height: 44
                }} />
            </div>
        </div>
    )
}
