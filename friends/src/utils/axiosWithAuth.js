import axios from 'axios';

// * NEW INSTANCE OF AXIOS
const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: !!token === true && token
        },
        timeout: 1250,
    });
};

export default axiosWithAuth