import React, { useState } from 'react';
import '../App.css'
import {useParams,useLocation} from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom';
import Posts from '../components/posts';

function Circle() {
    
    return(
        <> 
        <div>
            <h2>name</h2>
            <p>intro</p>
        </div>
        <div class="square2">
            <Posts />
            
        </div>
        </>
    )
}

export default Circle
