import React, { useEffect, useState } from 'react';
import '../App.css'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../pages/login';

export default function Post(){
    const{isLoggedIn,username,logout}=React.useContext(AuthContext);
    const{postid}=useParams();
    const[post,setPost]=useState('');
    const[postbyname,setPostbyname]=useState('');
    const[content,setContent]=useState('');
    const[comments,setComments]=useState([]);

    const getPost = async()=>{
        console.log('getpost',postid);
        const response = await axios.get(`http://localhost:7001/api/post/${postid}`);
        console.log(response.data);
        setPostbyname(response.data.user.username);
        setPost(response.data);
    }

    const handleComment=async()=>{
        if(!isLoggedIn){
            alert('You have to login before comment.');
        }else{
            const response = await axios.post(`http://localhost:7001/api/post/${postid}/comment`,{postid,username,content});
            setContent('');
            getComments();
        }
    }

    const getComments=async()=>{
        const response=await axios.get(`http://localhost:7001/api/post/${postid}/comments`,postid);
        setComments(response.data);
    }

    useEffect(()=>{
        getPost();
        getComments();
    },[postid]);

    return(
        <>
        <h2>{post.title}</h2>
        <div class='square'>
        <p>{post.content}</p>
            <p>Posted by: {postbyname}</p>
        </div>
        <div class='square'>
            <textarea
                style={{width:'60%',height:'50px',resize:'none'}}
                value={content}
                onChange={(e)=>setContent(e.currentTarget.value)}/>
            <button class='nor' onClick={handleComment}>Comment</button>
            {comments.map(comment=>(
                <div class='comment' key={comment.id}>{comment.username}：{comment.content}</div>
            ))}
        </div>
        </>
    )
}