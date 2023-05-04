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
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
