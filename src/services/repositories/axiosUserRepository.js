import axios from 'axios'
// import type {UserRepository} from "./interfaces/userRepository";

export default class AxiosUserRepository {
    async signIn(credentials) {
        return await axios.post('http://localhost:3001/api/v1/user/login', {
            "email": credentials.username,
            "password": credentials.password
        })
    }

    async updateUserProfile ({firstname, lastname, token}){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const data = {
            firstName: firstname,
            lastName: lastname
        }
        const res = await axios.put('http://localhost:3001/api/v1/user/profile', data, config)
        return res.data
    }

    async getUserProfile (token){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const res = await axios.post('http://localhost:3001/api/v1/user/profile', {}, config)
        return res.data
    }
}
