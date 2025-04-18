import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Public/Home'
import Login from './Pages/Public/Login'
import Studentdash from './Pages/Student/Studentdash'
import Submit from './Pages/Student/Submit'
import Viewfeadback from './Pages/Student/Viewfeadback'
import Admindash from './Pages/Admin/Admindash'
import AdminView from './Pages/Admin/AdminView'
import SendResult from './Pages/Admin/SendResult'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<Studentdash />} />
        <Route path="/student/submit" element={<Submit />} />
        <Route path="/student/view" element={<Viewfeadback />} />
        <Route path="/admin" element={<Admindash />} />
        <Route path="/admin/view" element={<AdminView />} />
        <Route path="/admin/send" element={<SendResult />} />
      </Routes>
    </div>
  );
}

export default App
