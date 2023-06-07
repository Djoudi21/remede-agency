type Credentials = {
    email: string,
    password: string
}

export interface UserRepository {
    signIn(credentials: Credentials): Promise<any>
    // updateUserProfile(value): Promise
}
