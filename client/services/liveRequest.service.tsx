import { _axiosInstance } from './api.service'

class LiveRequestService {
    static async getLiveRequests() {
        const res = await _axiosInstance.get('liveRequest')
        const data = await res.data
        return data
    }

    static async getRequestById(id: string) {
        const res = await _axiosInstance.get(`liveRequest/${id}`)
        const data = await res.data
        return data
    }

    static async getLiveRequestsBySearch(searchTerm: String) {
        const res = await _axiosInstance.get(`liveRequest/search?searchQuery=${searchTerm}`)
        const data = await res.data
        return data
    }

    static async getLiveRequestsByFilter(subjectId: String = '', sort: String = '', student: String = '', page: String = '') {
        const res = await _axiosInstance.get(`liveRequest?subject=${subjectId}&sort=${sort}&student=${student}&page=${page}`)
        const data = await res.data
        return data
    }

    static async createRequest(body: Object) {
        return _axiosInstance.post(`liveRequest`, body)
    }

    static async updateRequest(id: string, body: Object) {
        return _axiosInstance.put(`liveRequest/${id}`, body)
    }

    static async deleteRequest(id: string) {
        return _axiosInstance.delete(`liveRequest/${id}`)
    }
}

export default LiveRequestService