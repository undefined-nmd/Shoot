import { _axiosInstance } from './api'

class RequestService {
    static async getRequests() {
        const res = await _axiosInstance.get('request')
        const data = await res.data
        return data
    }

    static async getRequestById(id: String) {
        const res = await _axiosInstance.get(`request/${id}`)
        const data = await res.data
        return data
    }

    static async createRequest(body: Object) {
        return _axiosInstance.post(`request`, body) 
    }

    static async updateRequest(id: String, body: Object) {
        return _axiosInstance.put(`request/${id}`, body)
    } 

    static async deleteRequest(id: String) {
        return _axiosInstance.delete(`request/${id}`)
    }
}

export default RequestService