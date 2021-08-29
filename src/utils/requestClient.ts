import axios from 'axios';

const requestClient = axios.create({
	baseURL: 'https://ace-books-backend.herokuapp.com/api/',
	responseType: 'json',
    withCredentials: true,
});

export default requestClient;
