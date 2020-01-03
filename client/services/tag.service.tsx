import { _axiosInstance } from './api.service'

class TagService {
    static async getTags() {
        const res = await _axiosInstance.get('tag')
        const data = await res.data
        return data
    }

    static async getTagById(id: String) {
        const res = await _axiosInstance.get(`tag/${id}`)
        const data = await res.data
        return data
    }

    static async createTag(body: Object) {
        return _axiosInstance.post(`tag`, body) 
    }

    static async updateTag(id: String, body: Object) {
        return _axiosInstance.put(`tag/${id}`, body)
    } 

    static async deleteTag(id: String) {
        return _axiosInstance.delete(`tag/${id}`)
    }
}

export default TagService