import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1/`,
});

let userData = localStorage.getItem('userData');
userData = userData ? JSON.parse(userData) : userData;

if (userData) {
  axiosInstance.defaults.headers.common['X-Auth-Token'] = userData.token;
}

export default axiosInstance;
