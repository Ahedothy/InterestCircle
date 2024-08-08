import React, { useState } from 'react';
import '../login.css'
import '../App.css'
import { register } from '../api/user.api';
import { Link } from 'react-router-dom';

function Register(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    
    const handleRegister = async()=>{
        try {
            const response = await register(username,password);
            if(response.success){
            alert('User registered successfully!');
            }else{
                alert('Username has already been used.');
            }
        } catch (error) {
            alert('Registration failed!');
        }

    };


    return(
        <>
        <h1>Welcome to InterestCircle</h1>
        <div class="area">
            <div>
                <t3>Username</t3>
                <div className="board-row"></div>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.currentTarget.value)}
                />
            </div>
            <div>
                <t3>Password</t3>
                <div className="board-row"></div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
            </div>
            <form>
                <Link to='/home'>
                <button class="nor" type="submit" onClick={handleRegister}>
                    <t3>Register</t3>
                </button>
                </Link>
            </form>
        </div>
        </>
    )
}

export default Register;
