import React from 'react'
import Dashboardcontent from '../../Components/Student/Dashbordcontent/Dashboardcontent'
import Studentsidebar from '../../Components/Student/studentsidebar/Studentsidebar'
import '../pagecss/Studentdash.css'

const Studentdash = () => {
  return (
    <div className='studentdashboard'>
      <Studentsidebar/>
     <Dashboardcontent/>
    </div>
  )
}

export default Studentdash
