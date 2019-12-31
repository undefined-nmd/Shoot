import { _axiosInstance } from './api'

class UserService {
    static async getUsers() {
        const res = await _axiosInstance.get('user')
        const data = await res.data
        return data
    }

    static async getUserById(id: String) {
        const res = await _axiosInstance.get(`user/${id}`)
        const data = await res.data
        return data
    }

    static async createUser(body: Object) {
        return _axiosInstance.post(`user`, body) 
    }

    static async updateUser(id: String, body: Object) {
        return _axiosInstance.put(`user/${id}`, body)
    } 

    static async deleteUser(id: String) {
        return _axiosInstance.delete(`user/${id}`)
    }
}

export default UserService