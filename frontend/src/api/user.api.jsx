import axios from 'axios';


export const userInterface = axios.create(
    {
        baseURL:'http://localhost:7001/api/user',
    }
)

export const register = async(username,password) => {
    const response = await userInterface.post('/register',{username,password});
    return response.data;
}
export const login = async(username,password) => {
    const response = await userInterface.post('/login',{username,password});
    return response.data;
}