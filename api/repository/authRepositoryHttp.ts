import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "../http"

export type User = {
    name: string
    email: string
    password: string
    phone: string

}

export class AuthRepositoryHttp {

    async verify() {
        try {
            const token = await AsyncStorage.getItem('token') ?? ''
            const response = await api.get('/verifyToken', {
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

    async login(email: string, password: string) {
        try {
            const response = await api.post('/login', {
                "email": email,
                "password": password
            })
            return response
        } catch (error: any) {
            console.log(error.response)
            return error.response
        }
    }

    async cadastro(json: User) {
        try {
            const response = await api.post('/user', json)
            return response
        } catch (error: any) {
            console.log(error.response)
            return error.response
        }
    }
}