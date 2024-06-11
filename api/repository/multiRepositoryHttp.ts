import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../http";

export class MultiRepositoryHttp {

    async getBloodPressure() {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await api.get('/blood-pressure', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return response;
        } catch (error:any) {
            console.log(error);
            return error.response;
        }
    }

    async createBloodPressure(data: any) {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await api.post('/blood-pressure', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response;
        }
        catch (error:any) {
            console.log(error);
            return error.response;
        }
    }

    async getGlucose() {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await api.get('/glucose', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return response;
        } catch (error:any) {
            console.log(error);
            return error.response;
        }
    }