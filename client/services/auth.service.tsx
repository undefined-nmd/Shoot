import { _axiosInstance } from './api.service'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import Router from 'next/router'

export type DecodedToken = {
    readonly id: string
    readonly email: string
    readonly exp: number
}

const TOKEN_STRING: string = 'token'

class AuthService {
    readonly decodedToken: DecodedToken

    static async login(body: Object) {
        const { data } = await _axiosInstance.post('auth/login', body)
        this.setToken(data.token)
    }

    static logout() {
        Cookies.remove(TOKEN_STRING)
        Router.push('/login')
    }

    static getDecodedToken(token: string) {
        if(token && token !== null && token !== undefined) {
            const decodedToken: DecodedToken = jwtDecode(token)
            return decodedToken
        }
    }
    
    static isAuthenticated(): boolean {
        return this.getToken() !== undefined && this.getToken() !== null
    }

    static expiresAt(): Date {
        return new Date(this.getDecodedToken(this.getToken()).exp * 1000)
    }

    static isExpired(): boolean {
        return new Date > this.expiresAt()
    }

    static getToken() {
        return Cookies.get(TOKEN_STRING)
    }

    static setToken(token: string) {
        Cookies.set(TOKEN_STRING, token, { expires: 1 })
    }
}

export default AuthService