import React from 'react'
import './Studentsidebar.css'
import {Link} from 'react-router-dom'

const Studentsidebar = ({navbar1,navbar2,navbar3}) => {
  return (
    <div className='sidebar'>
      <Link to="/student">{navbar1}</Link>
      <Link to="/student/view">{navbar2}</Link>
      <Link to="/student/submit">{navbar3}</Link>
    </div>
  );
}

export default Studentsidebar
