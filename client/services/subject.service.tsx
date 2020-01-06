import { _axiosInstance } from './api.service'

class SubjectService {
    static async getSubjects() {
        const res = await _axiosInstance.get('subject')
        const data = await res.data
        return data
    }

    static async getSubjectById(id: String) {
        const res = await _axiosInstance.get(`subject/${id}`)
        const data = await res.data
        return data
    }

    static async createSubject(body: Object) {
        return _axiosInstance.post(`subject`, body) 
    }

    static async updateSubject(id: String, body: Object) {
        return _axiosInstance.put(`subject/${id}`, body)
    } 

    static async deleteSubject(id: String) {
        return _axiosInstance.delete(`subject/${id}`)
    }
}

export default SubjectService