import { useState } from 'react'
import './App.css'
import './index.css'
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

function App() {

    return(
        <> 
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <ul class="navbar-title" ><img src="/src/pictures/title.png" width="30px"/> InterestCircle</ul>
                    <ul class="navbar-menu">
                        <li class="navbar-item"><Link to='/home'><button class="nor">Home</button></Link></li>
                        <li class="navbar-item"><Link to='/login'><button class="nor">Login</button></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        </Router>
        </>
    )
}



export default App
