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