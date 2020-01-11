import { _axiosInstance } from './api.service'

class RequestService {
    static async getRequests() {
        const res = await _axiosInstance.get('request')
        const data = await res.data
        return data
    }

    static async getRequestById(id: string) {
        const res = await _axiosInstance.get(`request/${id}`)
        const data = await res.data
        return data
    }

    static async getRequestsBySearch(searchTerm: String) {
        const res = await _axiosInstance.get(`request/search?searchQuery=${searchTerm}`)
        const data = await res.data
        return data
    }

    static async getRequestsByFilter(subjectId: String = '', sort: String = '', student: String = '', page: String = '') {
        const res = await _axiosInstance.get(`request?subject=${subjectId}&sort=${sort}&student=${student}&page=${page}`)
        const data = await res.data
        return data
    }

    static async createRequest(body: Object) {
        return _axiosInstance.post(`request`, body)
    }

    static async updateRequest(id: string, body: Object) {
        return _axiosInstance.put(`request/${id}`, body)
    }

    static async deleteRequest(id: string) {
        return _axiosInstance.delete(`request/${id}`)
    }
}

export default RequestService