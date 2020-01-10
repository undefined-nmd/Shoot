import { _axiosInstance } from './api.service'

class UserService {
    static async getUsers() {
        const res = await _axiosInstance.get('user')
        const data = await res.data
        return data
    }

    static async getUserById(id: string) {
        const res = await _axiosInstance.get(`user/${id}`)
        const data = await res.data
        return data
    }

    static async createUser(body: Object) {
        return _axiosInstance.post(`user`, body) 
    }

    static async updateUser(id: string, body: Object) {
        return _axiosInstance.put(`user/${id}`, body)
    } 

    static async deleteUser(id: string) {
        return _axiosInstance.delete(`user/${id}`)
    }
}

export default UserService