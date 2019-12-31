import axios from 'axios'

// Default Axios Instance
export const _axiosInstance = axios.create({
    baseURL: 'http://localhost:1234/api/v1/'
})