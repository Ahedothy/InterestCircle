import axios from 'axios';

export const circleInterface = axios.create(
    {
        baseURL:'http://localhost:7001/api/circle',
    }
)


export const createCircle = async (name,intro)=>{
    const response = await circleInterface.post('/create',{name,intro});
    return response.data;
};
