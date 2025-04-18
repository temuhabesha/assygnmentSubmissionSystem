import React from 'react'
import './Submit.css'

const Submit = () => {
  return (
    <div className="submit">
      <h1>Submit Assignment</h1>
      <form>
        <div className="studentname">
          <label htmlFor="">Student Name</label>
          <input type="text" required />
        </div>
        <div className="studentid">
          <label htmlFor="">Student Id</label>
          <input type="text" required />
        </div>
        <div className="year">
          <label htmlFor="">Year</label>
          <input type="text" required />
        </div>
        <div className="course">
          <label htmlFor="">Name of Cource</label>
          <input type="text" required />
        </div>
        <div className="lecturer">
          <label htmlFor="">Name of Lecturer</label>
          <input type="text" required />
        </div>
        <div className="title">
          <label htmlFor="">Assignment Title</label>
          <input type="text" required />
        </div>
        <div className="file">
          <label htmlFor="">Upload Assignment</label>
          <input type="file" required placeholder='select file'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Submit
