import { useState } from 'react'
import './App.css'
import './index.css'
function App() {

    return(
        <> 
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <ul class="navbar-title" ><img src="/src/pictures/title.png" width="30px"/> InterestCircle</ul>
                    <ul class="navbar-menu">
                        <li class="navbar-item"><a href="/index.html" class="navbar-link">Home</a></li>
                        <li class="navbar-item"><a href="/login.html" class="navbar-link">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div>
        <h3>创建新的兴趣圈？<button class="nor" >点击创建</button></h3>
        </div>
        <div class="square">
            <Circles />
            <Circles />
            <Circles />
            <Circles />
            <Circles />
            <Circles />
        </div>
        </>
    )
}

function Circles(){
    return <button class="circle">Lucky Star</button>;
}

export default App
