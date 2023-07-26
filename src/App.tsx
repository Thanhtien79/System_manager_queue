import React from 'react';
import logo from './logo.svg';
import Login from './Pages/Login/Login';
import ForgotPass from './Pages/ForgotPass/ForgotPass';
import SetPass from './Pages/SetPass/SetPass';
import Info from './Pages/Info/Info';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import DashBoard from './Pages/DashBoard/DashBoard';
import Device from './Pages/Device/Device';
import AddDevice from './Pages/Device/AddDevice';
import InfoDevice from './Pages/Device/InfoDevice'
import EditDevice from './Pages/Device/EditDevice';
import DichVu from './Pages/DichVu/DichVu';
import AddDichVu from './Pages/DichVu/AddDichVu';
import UpdateDichVu from './Pages/DichVu/Update';
import InfoDichVu from './Pages/DichVu/InfoDichVu';
import CapSo from './Pages/CapSo/CapSo';
import SelectDate from './components/SelectDate';
import AddCapSo from './Pages/CapSo/AddCapSo';
import Number from './Pages/CapSo/Number';
import ManagerCapSo from './Pages/CapSo/ManagerCapso'
import Report from './Pages/Report/Report';
import VaiTro from './Pages/VaiTro/VaiTro';
import AddVaiTro from './Pages/VaiTro/AddVaiTro';
import UpdateVaiTro from './Pages/VaiTro/UpdateVaiTro';
import Account from './Pages/Account/Account';
import History from './Pages/History/History';
import AddAccount from './Pages/Account/AddAccount';
import UpdateAccount from './Pages/Account/UpdateAccount';

function App() {
  
  return (
    
    
    <div className="App">
     
    <Router>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/ForgotPass" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/SetPass" element={<SetPass></SetPass>}></Route>
        <Route path="/Info" element={<Info></Info>}></Route>
        <Route path="/DashBoard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/Device" element={<Device></Device>}></Route>
        <Route path="/AddDevice" element={<AddDevice></AddDevice>}></Route>
        <Route path="/InfoDevice" element={<InfoDevice></InfoDevice>}></Route>
        <Route path="/EditDevice" element={<EditDevice></EditDevice>}></Route>
        <Route path="/DichVu" element={<DichVu></DichVu>}></Route>
        <Route path="/AddDichVu" element={<AddDichVu></AddDichVu>}></Route>
        <Route path="/UpdateDichVu" element={<UpdateDichVu></UpdateDichVu>}></Route>
        <Route path="/InfoDichVu" element={<InfoDichVu></InfoDichVu>}></Route>
        <Route path="/CapSo" element={<CapSo></CapSo>}></Route>
        <Route path="/SelectDate" element={<SelectDate></SelectDate>}></Route>
        <Route path="/AddCapSo" element={<AddCapSo></AddCapSo>}></Route>
        <Route path="/Number" element={<Number></Number>}></Route>
        <Route path="/ManagerCapSo" element={<ManagerCapSo></ManagerCapSo>}></Route>
        <Route path="/Report" element={<Report></Report>}></Route>
        <Route path="/VaiTro" element={<VaiTro></VaiTro>}></Route>
        <Route path="/AddVaiTro" element={<AddVaiTro></AddVaiTro>}></Route>
        <Route path="/UpdateVaiTro" element={<UpdateVaiTro></UpdateVaiTro>}></Route>
        <Route path="/Account" element={<Account></Account>}></Route>
        <Route path="/History" element={<History></History>}></Route>
        <Route path="/AddAccount" element={<AddAccount></AddAccount>}></Route>
        <Route path="/UpdateAccount" element={<UpdateAccount></UpdateAccount>}></Route>

      </Routes>
    </Router>

    </div>
    
  );

}

export default App;
