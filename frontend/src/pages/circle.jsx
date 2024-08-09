import React, { useEffect, useState } from 'react';
import '../App.css'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Posts from '../components/posts';
import axios from 'axios';

function Circle() {
    const{id}=useParams();
    console.log('id:',id);
    const[circle,setCircle]=useState('');

    const getCircle = async () => {
        try {
          const response = await axios.get(`http://localhost:7001/api/circle/${id}`,id);
          setCircle(response.data);
          console.log(response.data); 
        } catch (error) {
          console.error('Error fetching circles:', error);
        }
      };

    useEffect(()=>{    
        getCircle();
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
