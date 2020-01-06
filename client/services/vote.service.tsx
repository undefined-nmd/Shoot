import { _axiosInstance } from './api.service'

class VoteService {
    static async getVotes() {
        const res = await _axiosInstance.get('vote')
        const data = await res.data
        return data
    }

    static async getVoteById(id: String) {
        const res = await _axiosInstance.get(`vote/${id}`)
        const data = await res.data
        return data
    }

    static async createVote(body: Object) {
        return _axiosInstance.post(`vote`, body) 
    }

    static async updateVote(id: String, body: Object) {
        return _axiosInstance.put(`vote/${id}`, body)
    } 

    static async deleteVote(id: String) {
        return _axiosInstance.delete(`vote/${id}`)
    }
}

export default VoteService