import React, { useEffect, useState } from 'react';
import '../App.css'
import {useParams,useLocation} from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom';
import Posts from '../components/posts';
import { getCircle } from '../api/circle.api';

function Circle() {
    const{id}=useParams();
    const[circle,setCircle]=useState(null);

    useEffect(()=>{
        const fetchCircle = async()=>{
            const result = await getCircle(id);
            setCircle(result.data);
        };
        fetchCircle();
    },[id]);

    return(
        <> 
        <div>
            <h2>{circle.name}</h2>
            <p>{circle.intro}</p>
        </div>
        <div class="square2">
            <Posts />
            
        </div>
        </>
    )
}

export default Circle
