import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-752b0.firebaseio.com/'
});

export default instance;
