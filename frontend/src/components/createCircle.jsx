import React, { useState } from "react";
import '../App.css'
import { createCircle } from "../api/circle.api";

export default function CreateCircle({getCircles}){
    const[name,setName]=useState('');
    const[intro,setIntro]=useState('');

    const handleCreate =async()=>{
        const response = await createCircle(name,intro);
        getCircles();
        setName('');
        setIntro('');
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
            style={{width:'300px'}}
                type='text'
                value={intro}
                onChange={(e) => setIntro(e.currentTarget.value)}
            /><button class="nor" onClick={handleCreate}>Create</button></p>
        </div>
        </>
    )
}