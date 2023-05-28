import axios from 'axios'
// import type {UserRepository} from "./interfaces/userRepository";

export default class AxiosUserRepository {
    async signIn(credentials) {
        console.log('RES', credentials)
        // const res = await axios.post('http://localhost:3001/api/v1/user/login', {
        //     "email": credentials.username,
        //     "password": credentials.password
        // })
        // console.log('RES', res)
        return {
           data: {
               status: 200
           }
        }
    }

    async updateUserProfile (value){
        console.log(value)
        const res = await axios.put('http://localhost:3001/api/v1/user/profile', {
            "firstName": value.username,
            "lastName": value.password
        })
        console.log('RES', res)
    }
}
