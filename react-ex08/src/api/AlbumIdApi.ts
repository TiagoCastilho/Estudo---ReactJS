import axios from 'axios';
const Base = 'https://jsonplaceholder.typicode.com/albums';

export const api = {
    getAlbum: async (id: string) => {
        let response = await axios.get(`${Base}/${id}`);
        return response.data;
    }
}