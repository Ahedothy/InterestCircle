import React, { useState } from 'react';
import '../login.css'
import '../App.css'


function Register(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    
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
               <button class="nor" type="submit">
                    <t3>Register</t3>
                </button>
            </form>
        </div>
        </>
    )
}

export default Register;
