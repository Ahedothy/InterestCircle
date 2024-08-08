import React from "react";
import { useState } from "react";
import '../App.css'
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom';
import CreateCircle from "./createCircle";

export default function Circles(){
    const[circles,setCircles]=useState([]);

    const addCircle=(newCircle)=>{
        setCircles([...circles,newCircle]);
    };

    return(
        <> 
        <CreateCircle addCircle={addCircle} />
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