import { _axiosInstance } from './api.service'

class AuthService {
    static async login(body: Object) {
        const res = await _axiosInstance.post('auth/login', body)
        const { token } = res.data
        this.setToken(token) 
        return token
    }

    static logout() {
        localStorage.removeItem('token')
    }

    static isAuthenticated() {
        const token = this.getToken()
        return token && token !== null
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static setToken(token: string) {
        localStorage.setItem('token', token)
    }
}

export default AuthService