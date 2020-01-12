import { _axiosInstance } from './api.service'

class LocationService {
    static async getLocations() {
        const res = await _axiosInstance.get('location')
        const data = await res.data
        return data
    }

    static async getLocationById(id: string) {
        const res = await _axiosInstance.get(`location/${id}`)
        const data = await res.data
        return data
    }

    static async createLocation(body: Object) {
        return _axiosInstance.post(`location`, body)
    }

    static async updateLocation(id: string, body: Object) {
        return _axiosInstance.put(`location/${id}`, body)
    }

    static async deleteLocation(id: string) {
        return _axiosInstance.delete(`location/${id}`)
    }
}

export default LocationService