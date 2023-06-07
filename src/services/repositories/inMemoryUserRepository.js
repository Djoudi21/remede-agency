// import { UserRepository } from "./interfaces/userRepository";

export default class InMemoryUserRepository {
    users = []
    signIn(credentials) {
        const response = {
            token: `string ${credentials.email}`,
            message: 'toto',
            status: 200
        }
        return Promise.resolve(response)
    }
}
