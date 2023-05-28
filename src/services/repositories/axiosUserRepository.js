import axios from 'axios'

export default class AxiosUserRepository {
    async signIn(credentials) {
        console.log('RES', credentials)
        const res = await axios.post('http://localhost:3001/api/v1/user/login', {
            "email": credentials.username,
            "password": credentials.password
        })
        console.log('RES', res)
    }
}
