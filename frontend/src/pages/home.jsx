import React, { useState } from 'react';
import '../App.css'
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom';
import CreateCircle from '../components/createCircle';
import Circles from '../components/circles';

function Home() {
    
    return(
        <> 
        <div>
        <CreateCircle />
        
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

export default Home
