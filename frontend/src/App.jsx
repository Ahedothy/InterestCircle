import React,{ useState } from 'react'
import './App.css'
import './index.css'
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import Circle from './pages/circle';
import Post from './pages/post';
import { AuthProvider,AuthContext } from './pages/login';

function App() {

    return(
        <AuthProvider> 
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/circle/:id' element={<Circle/>}/>
                <Route path='/circle/:id/post/:postid' element={<Post/>}/>
            </Routes>
        </Router>
        </AuthProvider>
    )
}

export default App

const Navbar =()=>{
    const{isLoggedIn,username,logout}=React.useContext(AuthContext);
    return(
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <ul class="navbar-title" ><img src="/src/pictures/title.png" width="30px"/> InterestCircle</ul>
                    <ul class="navbar-menu">
                        <li class="navbar-item"><Link to='/home'><button class="nor">Home</button></Link></li>
                        {isLoggedIn ? (
                            <li className="navbar-item"><button className="nor" onClick={logout}>{username} Logout</button></li>
                        ):(<>
                            <li class="navbar-item"><Link to='/login'><button class="nor">Login</button></Link></li>
                            <li class="navbar-item"><Link to='/register'><button class="nor">Register</button></Link></li>
                        </>)}
                    </ul>
                </div>
            </nav>
        </div>
    )
}