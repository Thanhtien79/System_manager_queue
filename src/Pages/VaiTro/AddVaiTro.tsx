import React from 'react'
import Class from './AddVaiTro.module.css'
import MenuBar from '../../Templates/MenuBar/MenuBar'
import TopBar from '../../Templates/TopBar/TopBar'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Link } from 'react-router-dom';

import { Button, Input, Space, Checkbox } from 'antd';
const { TextArea } = Input;
const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

const ClickChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
};
export default function AddVaiTro() {
    return (
        <div className={Class.AddVaiTro}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.Title}>
                <h1>Danh sách vai trò</h1>
            </div>
            <div className={Class.Box}>
                <div className={Class.BoxTitle}>
                    <p>Thông tin vai trò</p>
                </div>
                <div className={Class.BoxLeft}>
                    <div className={Class.Code}>
                        <span className={Class.Title}>Tên vai trò: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='Nhập tên vai trò' />
                    </div>
                    <div className={Class.Descrip}>
                        <span className={Class.Title}>Mô tả: </span>
                        <TextArea
                            showCount
                            maxLength={500}
                            style={{ height: 140, width: 550, top: 5, resize: 'none' }}
                            onChange={ClickChange}
                            placeholder="Nhập mô tả"
                        />
                    </div>

                    <div className={Class.Note}>
                        <span className={Class.Icon}>* </span>
                        <span className={Class.Titless}> Là trường thông tin bắt buộc</span>
                    </div>
                </div>
                <div className={Class.Titles}>
                    <span className={Class.Title}>Phân quyền chức năng </span>
                    <span className={Class.Icon}>*</span>
                </div>
                <div className={Class.BoxRight}>
                    <div className={Class.OptionA}>
                        <p>Nhóm chắc năng A</p>
                        <div className={Class.Option1}>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Tất cả</Checkbox>
                            </div>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Chức năng X</Checkbox>
                            </div>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Chức năng Y</Checkbox>
                            </div>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Chức năng z</Checkbox>
                            </div>
                        </div>
                    </div>
                    <div className={Class.OptionB}>
                        <p>Nhóm chắc năng B</p>
                        <div className={Class.Option2}>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Tất cả</Checkbox>
                            </div>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Chức năng X</Checkbox>
                            </div>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Chức năng Y</Checkbox>
                            </div>
                            <div className={Class.Option}>
                                <Checkbox onChange={onChange}>Chức năng z</Checkbox>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={Class.BtnCance}>

                <Link to='/Login'>  <button type='button' >Huỷ bỏ</button></Link>
            </div>
            <div className={Class.BtnAdd}>
                <Link to='/SetPass'><button type='button' >Thêm</button></Link>
            </div>

        </div>
    )
}
