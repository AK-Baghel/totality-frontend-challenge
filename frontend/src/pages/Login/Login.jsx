import React, { useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../component/Context/AppContext';

function Login() {

    const { setLoginId, loginId, privateToggle, setPrivateToggle } = useContext(Context);

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': "application/json"
                }
            });
            const result = await response.json()
            setLoginId(result)
            console.log(loginId);


            navigate('/')
            setPrivateToggle(true)

            localStorage.setItem('token', response.data.token);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };


    return (
        <div className="loginMain">
            <div className="loginBox">
                <div className="loginHeading">Totality Corp</div>
                <input type="email" className="inputLogin" value={email} placeholder='Enter Your Email' onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" className="inputLogin" value={password} placeholder='Enter Your Password' onChange={(e) => { setPassword(e.target.value) }} />
                <div className="loginButton" onClick={handleLogin}>Login</div>
                <div className="loginPageLink" onClick={() => navigate("/signup")}>Don't have a Account? Sign Up </div>
            </div>
        </div>
    )
}

export default Login