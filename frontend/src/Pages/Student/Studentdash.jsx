import React from 'react'
import Dashboardcontent from '../../Components/Student/Dashbordcontent/Dashboardcontent'

import '../pagecss/Studentdash.css'
import Studentsidebar from '../../Components/utiles/studentsidebar/Studentsidebar'

const Studentdash = () => {
  return (
    <div className='studentdashboard'>
      <Studentsidebar navbar1="Dashboard" navbar2="Submit" navbar3="Feedback"/>
     <Dashboardcontent/>
    </div>
  )
}

export default Studentdash
