import React from 'react'
import Class from './Search.module.css'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';

export default function Search() {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    return (
        <div className={Class.Search}>
              <p>Từ khoá</p>
                <Search id="Search" placeholder="" allowClear onSearch={onSearch} style={{
                    width: 250, height: 44,
                }} />
        </div>
    )
}
