import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "../http"

export class ConsultationRepositoryHttp {
    async getConsultations() {
        try {
            const token = await AsyncStorage.getItem('token') ?? ''
            const response = await api.get('/consultation', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response
        } catch (error: any) {
            console.log(error.response)
            return error.response
        }
    }

    async getConsultationById(id: number) {
        try {
            const token = await AsyncStorage.getItem('token') ?? ''
            const response = await api.get(`/consultation/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response
        } catch (error: any) {
            console.log(error.response)
            return error.response
        }
    }

    async createConsultation(data: any) {
        try {
            const token = await AsyncStorage.getItem('token') ?? ''
            const response = await api.post('/consultation', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response
        } catch (error: any) {
            console.log(error.response)
            return error.response
        }
    }
}