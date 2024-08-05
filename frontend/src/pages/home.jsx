import React, { useState } from 'react';

function Home() {

    return(
        <> 
        <div>
        <h3>创建新的兴趣圈？<button class="nor" >点击创建</button></h3>
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

function Circles(){
    return <button class="circle">Lucky Star</button>;
}