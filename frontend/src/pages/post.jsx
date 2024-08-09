import React, { useEffect, useState } from 'react';
import '../App.css'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../pages/login';

export default function Post(){
    const{postid}=useParams();
    const[post,setPost]=useState('');
    const[username,setUsername]=useState('');    
    const getPost = async()=>{
        console.log('getpost',postid);
        const response = await axios.get(`http://localhost:7001/api/post/${postid}`);
        console.log(response.data);
        setUsername(response.data.user.username);
        setPost(response.data);
    }

    useEffect(()=>{
        getPost();
    },[postid]);

    return(
        <>
        <h2>{post.title}</h2>
        <div class='square'>
        <p>{post.content}</p>
        <p>Posted by: {username}</p>
        </div>
        </>
    )
}