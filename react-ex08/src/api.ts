import axios from 'axios';
const Base = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAllAlbums: async () => {
        let response = await axios.get(`${Base}/albums`);
        return response.data;
    }
}