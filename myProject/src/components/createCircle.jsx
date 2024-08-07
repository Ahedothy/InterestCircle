import React, { useState } from "react";
import '../App.css'

export default function CreateCircle({addCircle}){
    const[name,setName]=useState('');
    const[intro,setIntro]=useState('');

    const handleCreate =()=>{
        if(name&&intro){
            addCircle({name,intro});
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