import axios from 'axios'

const _axiosInstance = axios.create({
    baseURL: 'http://localhost:1234/api/v1/'
})

class API {
    static async getLiveRequests() {
        const res = await _axiosInstance.get('liveRequest')
        const data = await res.data
        return data
    }

    static async getLocations() {
        const res = await _axiosInstance.get('location')
        const data = await res.data
        return data
    }

    static async getRequests() {
        const res = await _axiosInstance.get('request')
        const data = await res.data
        return data
    }

    static async getRoles() {
        const res = await _axiosInstance.get('role')
        const data = await res.data
        return data
    }

    static async getSubjects() {
        const res = await _axiosInstance.get('subject')
        const data = await res.data
        return data
    }

    static async getTags() {
        const res = await _axiosInstance.get('tag')
        const data = await res.data
        return data
    }

    static async getUsers() {
        const res = await _axiosInstance.get('user')
        const data = await res.data
        return data
    }
}

export default API