import React, { useState } from "react";
import '../App.css'

export default function CreateCircle(){
    const[name,setName]=useState('');
    const[intro,setIntro]=useState('');

    return(
        <>
        <div>
        <h3>Create a new InterestCircle?</h3>
            <p>Name <input
                type='text'
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
            />Intro <input
                type='text'
                value={intro}
                onChange={(e) => setIntro(e.currentTarget.value)}
            /><button class="nor">Create</button></p>
        </div>
        </>
    )
}