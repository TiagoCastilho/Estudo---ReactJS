import axios from 'axios';
const Base = 'https://jsonplaceholder.typicode.com/albums';

export const api = {
    getPhoto: async (id: string) => {
        let response = await axios.get(`${Base}/${id}/photos`);
        return response.data;
    }
}