import axios from 'axios'
import { AuthService } from '.';

// Default Axios Instance
export const _axiosInstance = axios.create({
    baseURL: 'http://localhost:1234/api/v1/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

export const setAuthorizationHeader = (token: string) => {
    _axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}