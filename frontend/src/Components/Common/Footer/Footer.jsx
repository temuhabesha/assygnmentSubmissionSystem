import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className="upperfooter">
      <div className="footer">
        <div className="footerlogo">
          <Link>logo</Link>
        </div>
        <div className="privecy">
          <p>@copyRight privecy</p>
          <p>developed by Tom</p>
        </div>
        <div className="socialmedialink">
          <Link>Linkedin</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
