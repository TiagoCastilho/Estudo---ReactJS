import axios from 'axios';
const Base = 'https://jsonplaceholder.typicode.com/photos';

export const api = {
    getPhoto: async (id: string) => {
        let response = await axios.get(`${Base}/${id}`);
        return response.data;
    }
}