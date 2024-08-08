import axios from 'axios';

const API_URL='http://localhost:7001/api/circle';

export const createCircle = async (circleData)=>{
    const response = await axios.post(API_URL,circleData);
    return response.data;
};

export const getCircle = async (id) =>{
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}