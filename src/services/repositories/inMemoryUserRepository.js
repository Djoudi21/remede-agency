// import { UserRepository } from "./interfaces/userRepository";

import axios from "axios";

export default class InMemoryUserRepository {
    users = []
    signIn(credentials) {
        const successResponse = {
            token: `string ${credentials.email}`,
            message: 'success',
            status: 200
        }

        const errorResponse = {
            message: 'error',
            status: 500
        }

        const user = this.users.find(user => user.email === credentials.email && user.password === credentials.password)
        if(user) {
            return Promise.resolve(successResponse)
        } else {
            return Promise.resolve(errorResponse)

        }
    }

    async getUserProfile (token){
        const successResponse = {
            body: this.users[0],
            message: 'success',
            status: 200
        }

        const errorResponse = {
            message: 'error',
            status: 500
        }

        if(token) {
            return Promise.resolve(successResponse)
        } else {
            return Promise.resolve(errorResponse)
        }
    }

    async updateUserProfile ({newFirstName, newLastName, token}){
        const successResponse = {
            body: {
                firstName: newFirstName,
                lastName: newLastName
            },
            message: 'success',
            status: 200
        }

        const errorResponse = {
            message: 'error',
            status: 500
        }

        if(token) {
            return Promise.resolve(successResponse)
        } else {
            return Promise.resolve(errorResponse)
        }
    }

}
