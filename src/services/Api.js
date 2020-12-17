import axios from 'axios';

const key = "18602870-de8ca2cc828b7c2a44ec2be3c";

export const getImages = (query = "", page = 1) => {
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=15`;
  return axios.get(path);
};

export const someFetch = () => {};