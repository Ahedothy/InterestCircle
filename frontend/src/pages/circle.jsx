import React, { useEffect, useState } from 'react';
import '../App.css'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../pages/login';
import CircleActivity from '../components/circleActivity';

function Circle() {
    const{isLoggedIn,username,logout}=React.useContext(AuthContext);
    const{id}=useParams();
    const[circle,setCircle]=useState('');
    const[posts,setPosts] = useState([]);
    const[isJoined,setIsJoined]=useState(false);

    const getCircle = async () => {
        try {
          const response = await axios.get(`http://localhost:7001/api/circle/${id}`,id);
          setCircle(response.data);
          console.log(response.data); 
        } catch (error) {
          console.error('Error fetching circles:', error);
        }
      };

    const getPosts = async()=>{
        const response = await axios.get(`http://localhost:7001/api/circle/${id}/posts`,id);
        setPosts(response.data);
    }

    const getIfJoined = async()=>{
        if(isLoggedIn){
            const response = await axios.get(`http://localhost:7001/api/circle/${id}/isjoined`,{params:{username}});
            if(response.data)
            setIsJoined(true);
        }
    }

    useEffect(()=>{    
        getCircle();
        getPosts();
        getIfJoined();
    },[id,isLoggedIn]);


    const[title,setTitle]=useState('');
    const[content,setContent]=useState('');
    const[image,setImage]=useState(null);

    const handleImageChange=(e)=>{
        setImage(e.target.files[0]);
    }

    const handleJoinCircle = async()=>{
        if(!isLoggedIn){
            alert('You have to login before join circle.');
        }else{
        const response = await axios.post('http://localhost:7001/api/circle/join',{username,id});
        setIsJoined(true);
        console.log(username,'join circle',id);
        }
    }

    const handlePost=async()=>{
        if(!isLoggedIn){
            alert('You have to login before post.');
        }else if(!isJoined){
            alert('You have to join circle before post.');
        }else{
            const data = new FormData();
            data.append('username',username);
            data.append('title',title);
            data.append('content',content);
            data.append('image',image);
            console.log(data.get('username'),data.get('title'),data.get('content'),data.get('image'));
        const response = await axios.post(`http://localhost:7001/api/circle/${id}/post`,data);
        setTitle('');
        setContent('');
        getPosts();
        }
    }
    
    return(
        <> 
        <div>
            <h2>{circle.name}</h2>
            <p>{circle.intro}</p>
            {isJoined ? (<button class='nor'>Joined</button>):
            (<button class='nor' onClick={handleJoinCircle}>Join</button>)}
        </div>
        <div class='container'>
        <div class='leftpanel'>
        <div class="square2">
            <p>title <input
            style={{marginRight:'20px'}}
                type='text'
                value={title}
                onChange={(e)=>setTitle(e.currentTarget.value)}/></p>
            <textarea
                style={{width:'90%',height:'100px',resize:'none',marginBottom:'10px'}}
                type='text'
                value={content}
                onChange={(e)=>setContent(e.currentTarget.value)}/>
            <p>Add Picture<input type='file' onChange={handleImageChange}/>
            <button class="nor" onClick={handlePost}>Post</button></p>
        </div>
        <div class="square2">    
            <div>
            {posts.map(post=>(
                <Link 
                    key = {post.id}
                    to={`/circle/${circle.id}/post/${post.id}`}>
                        <button class="post">{post.title}</button>
                    </Link>
            ))}
            </div>
        </div>
        </div>
        <div class="rightpanel">
        <CircleActivity id={id} />
        </div>
        </div>
        </>
    )
}

export default Circle
