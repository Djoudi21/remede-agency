import axios from 'axios'

export default class AxiosUserRepository {
    async signIn(credentials) {
        const data = {
            email: credentials.email,
            password: credentials.password,
        }
        return await axios.post('http://localhost:3001/api/v1/user/login', data)
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
