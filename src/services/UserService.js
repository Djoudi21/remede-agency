export default class UserService {
    userRepository
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    signIn = async (credentials) => {
       return await this.userRepository.signIn(credentials)
    }

    updateUserProfile = async (value) => {
        return this.userRepository.updateUserProfile(value)
    }
}
