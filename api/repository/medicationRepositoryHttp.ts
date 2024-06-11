import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../http";

export class MedicationRepositoryHttp {

    async getMedications() {
        try {
            const token = await AsyncStorage.getItem('token') ?? ''
            const response = await api.get('/medication', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response
        } catch (error: any) {
            console.error(error);
            return error.response;
        }
    }

    async getMedicationById(id: number) {
        try {
            const token = await AsyncStorage.getItem('token') ?? ''
            const response = await api.get(`/medication/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response
        } catch (error: any) {
            console.error(error);
            return error.response;
        }
    }

    async createMedication(data: any) {
        try {
            const token = await AsyncStorage.getItem('token') ?? ''
            const response = await api.post('/medication', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response
        } catch (error: any) {
            console.error(error);
            return error.response;
        }
    }
}