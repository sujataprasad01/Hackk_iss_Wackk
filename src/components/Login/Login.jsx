import React from 'react'
import InputControl from '../InputControl/InputControl'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <InputControl label='Email' placeholder="Enter email address"></InputControl>
        <InputControl label='Password' placeholder="Enter password"></InputControl>

        <div>
            <button>Login</button>
            <p>Already have an account? <span><Link to='/signup'>Sign up</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
