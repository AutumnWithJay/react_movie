import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '87eca074db799da658adebf6ff380f42',
    language: 'ko-KR',
  },
});

export const tvApi = {};

export const moviesApi = {};
