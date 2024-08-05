import React, { useState } from 'react';
import '../App.css'
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom';
import Posts from '../components/posts';

function Circle() {
    
    return(
        <> 
        <div>
            <h1>Lucky Star</h1>
        </div>
        <div class="square">
            <Posts />
            
        </div>
        </>
    )
}

export default Circle
