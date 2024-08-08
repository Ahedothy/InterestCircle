import React, { useState ,createContext, useContext} from 'react';
import '../login.css'
import '../App.css'
import { login } from '../api/user.api';
import { Link } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const[username,setUsername]=useState('');

    const login = (username) =>{
        setIsLoggedIn(true);
        setUsername(username);
    }

    const logout =()=>{
        setIsLoggedIn(false);
        setUsername('');
    }
    return(
        <AuthContext.Provider value={{isLoggedIn,username,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


function Login(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const{login:authLogin}=useContext(AuthContext);

    const handleLogin = async()=>{
        try {
            const response = await login(username,password);
            if(response.success){
                authLogin(username);
            alert('User loggedin successfully!');
            
            }else{
                alert('Username has already been used.');
            }
        } catch (error) {
            alert('Login failed!');
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
               <button class="nor" type="submit" onClick={handleLogin}>
                    <t3>Login</t3>
                </button>
                </Link>
            </form>
        </div>
        </>
    )
}

export default Login;

