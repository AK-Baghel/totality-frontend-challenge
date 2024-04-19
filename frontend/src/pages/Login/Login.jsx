import React, { useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="loginMain">
            <div className="loginBox">
                <div className="loginHeading">Totality Corp</div>
                <input type="email" className="inputLogin" value={email} placeholder='Enter Your Email' onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" className="inputLogin" value={password} placeholder='Enter Your Password' onChange={(e) => { setPassword(e.target.value) }} />
                <div className="loginButton">Login</div>
                <div className="loginPageLink" onClick={() => { navigate('/signup') }}>Don't have a Account? Sign Up </div>
            </div>
        </div>
    )
}

export default Login