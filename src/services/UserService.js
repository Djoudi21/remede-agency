export default class UserService {
    userRepository
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    signIn = async (credentials) => {
        return this.userRepository.signIn(credentials)
    }
}
