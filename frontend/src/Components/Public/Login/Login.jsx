import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div className="email">
          <label htmlFor="">Email</label>
          <input type="email" required />
        </div>
        <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" required/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login
