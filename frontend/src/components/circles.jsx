import React, { useEffect } from "react";
import { useState } from "react";
import '../App.css'
import {Link} from 'react-router-dom';
import CreateCircle from "./createCircle";
import axios from "axios";

export default function Circles(){
    const[circles,setCircles]=useState([]);
    
    const getCircles = async () => {
      try {
        const response = await axios.get('http://localhost:7001/api/circle/circles');
        setCircles(response.data); 
      } catch (error) {
        console.error('Error fetching circles:', error);
      }
    };

    useEffect(()=>{
        
          getCircles();

    },[])

    return(
        <> 
        <CreateCircle getCircles={getCircles}/>
        <div class="square">
        {circles.map((circle)=>(
        <Link 
            key={circle.id} 
            to={`/circle/${circle.id}`}>
            <button class="circle">{circle.name}</button>
        </Link>
        ))}
        </div>
        </>
    )
}