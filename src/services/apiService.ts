import axios from 'axios';

const BASE_URL = 'https://localhost:5000/';
const httpService = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {

    }
})

export const createUser = async () => {
    try{
        const response = await httpService.get('addPerson');
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
}