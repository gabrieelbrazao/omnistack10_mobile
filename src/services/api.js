import axios from 'axios';
import { API_URI } from 'react-native-dotenv'

const api = axios.create({
    baseURL: `${API_URI}:3333`
});

export default api;