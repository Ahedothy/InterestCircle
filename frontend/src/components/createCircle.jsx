import React, { useState } from "react";
import '../App.css'
import { createCircle } from "../api/circle.api";

export default function CreateCircle({addCircle}){
    const[name,setName]=useState('');
    const[intro,setIntro]=useState('');

    const[circle,setCircle]=useState({name:'',intro:''});
    const[circleId,setCircleId]=useState('');
    const[fetchedCircle,setFetchedCircle]=useState(null);

    
    const handleCreate =async()=>{
        if(name&&intro){
            addCircle({name,intro});
            setCircle({...circle,[name]:name,[intro]:intro})
            const result = await createCircle(circle);
            setFetchedCircle(result.data);
            setName('');
            setIntro('');
        }
    }

    return(
        <>
        <div>
        <h2>Create a new InterestCircle?</h2>
            <p>Name <input
                type='text'
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
            />Intro <input
                type='text'
                value={intro}
                onChange={(e) => setIntro(e.currentTarget.value)}
            /><button class="nor" onClick={handleCreate}>Create</button></p>
        </div>
        </>
    )
}