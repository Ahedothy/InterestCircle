import React,{useEffect,useState} from "react";
import axios from "axios";
import '../App.css'

export default function CircleActivity({id}){
    const[activityData,setActivityData]=useState([]);

    useEffect(()=>{
        const getActivity=async()=>{
            const response = await axios.get(`http://localhost:7001/api/circle/${id}/activity`,id);
            setActivityData(response.data);
        }
        getActivity();
    },[id]);

    return(<div class='square3'>
        <h3>Member Activity</h3>
        {activityData.map((member)=>(
            <div class='comment' key={member.username}>
                {member.username}: Posted {member.postCount} posts.
            </div>
        ))}
    </div>)
}