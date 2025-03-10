import React, { useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleRegister = async (e) => {
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': "application/json"
                }
            });
            navigate('/login');
        } catch (error) {
            setError('Registration failed. Please try again.');
            // setIsLoading(false);
        }
    };


    return (
        <div className="loginMain">
            <div className="loginBox">
                <div className="loginHeading">Totality Corp</div>
                <input type="text" className="inputLogin" value={name} placeholder='Enter Your Full Name' onChange={(e) => { setName(e.target.value) }} />
                <input type="email" className="inputLogin" value={email} placeholder='Enter Your Email' onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" className="inputLogin" value={password} placeholder='Enter Your Password' onChange={(e) => { setPassword(e.target.value) }} />
                <div className="loginButton" onClick={handleRegister}>SignUp</div>
                <div className="loginPageLink" onClick={() => { navigate('/login') }}>Have a Account? Login </div>
            </div>
        </div>
    )
}


export default SignUp