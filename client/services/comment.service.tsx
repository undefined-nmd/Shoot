import { _axiosInstance } from './api.service'

class CommentService {
    static async getComments() {
        const res = await _axiosInstance.get('comment')
        const data = await res.data
        return data
    }

    static async getCommentById(id: string) {
        const res = await _axiosInstance.get(`comment/${id}`)
        const data = await res.data
        return data
    }

    static async createComment(body: Object) {
        return _axiosInstance.post(`comment`, body) 
    }

    static async updateComment(id: string, body: Object) {
        return _axiosInstance.put(`comment/${id}`, body)
    } 

    static async deleteComment(id: string) {
        return _axiosInstance.delete(`comment/${id}`)
    }
}

export default CommentService