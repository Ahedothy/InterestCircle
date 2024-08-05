import React, { useState } from 'react';
import './login.css'
import ReactDOM from 'react-dom/client'

var Islogin=0;

function Login(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    
    return(
        <>
        <t2>Welcome to InterestCircle</t2>
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
               <button type="submit">
                    <t3>Submit</t3>
                </button>
            </form>
        </div>
        </>
    )
}

export default Login;

function SetLogin(){
    !Islogin;
    return ;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>,
  )