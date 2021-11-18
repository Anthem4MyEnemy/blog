import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register",{
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
            
        } catch (error) {
            setError(true);
            console.log(error);
        }

    }
    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form  className="register-form" onSubmit={handleSubmit}>

                <label >Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username..."
                    onChange={e=>setUsername(e.target.value)}    
                />

                <label >Email</label>
                <input 
                    type="text" 
                    placeholder="Enter your email" 
                    onChange={e=>setEmail(e.target.value)}
                />

                <label >Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password"
                    onChange={e=>setPassword(e.target.value)}   
                />

                <button className="register-button" type="submit">register</button>
                {error && 
                <span style={{color:"red", fontSize:"20px",marginTop:"10px"}}>Something went wrong</span>
                }
            </form>

            <button className="register-login-button">
                <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}

export default Register
