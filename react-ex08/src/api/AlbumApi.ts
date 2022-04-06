import axios from 'axios';
const Base = 'https://jsonplaceholder.typicode.com/albums';

export const api = {
    getAllAlbums: async () => {
        let response = await axios.get(`${Base}`);
        return response.data;
    }
}