import React from 'react'
import Studentsidebar from '../../Components/utiles/studentsidebar/Studentsidebar'
import AdminBody from '../../Components/Admin/AdminBody/AdminBody'
import '../pagecss/AdminBody.css'

const Admindash = () => {
  return (
    <div className='admindashboard'>
      <Studentsidebar navbar1="Dashboard" navbar2="Assignment" navbar3="SendFeedback"/>
      <AdminBody/>
    </div>
  )
}

export default Admindash
