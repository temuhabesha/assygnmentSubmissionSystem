import React from 'react'
import './Studentsidebar.css'
import {Link} from 'react-router-dom'

const Studentsidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/student">Dashboard</Link>
      <Link to="/student/view">FeedBack</Link>
      <Link to="/student/submit">Assignment</Link>
    </div>
  );
}

export default Studentsidebar
