import axios from 'axios';

export const search = axios.create({
  baseURL: 'https://api.github.com/search',
});
