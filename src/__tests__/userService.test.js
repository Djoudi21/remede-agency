import React from 'react';
import UserService from "../services/UserService";
import InMemoryUserRepository from "../services/repositories/inMemoryUserRepository";


describe('user service', () => {
    let inMemoryUserRepository
    let userService
    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository()
        userService = new UserService(inMemoryUserRepository)
    })

    describe('login',  () => {
        it('should login a user with valid credentials', async () => {
            // ARRANGE
            const user = {
                email: "tony@stark.com",
                password: "password123"
            }
            inMemoryUserRepository.users = [user]
            const credentials = {
                email: "tony@stark.com",
                password: "password123"
            }

            // ACT
            const response = await userService.signIn(credentials)

            //ASSERT
            expect(response.token).toBeDefined();
            expect(response.status).toBe(200);
        })

        it('should not login a user if password is not valid', async () => {
            // ARRANGE
            const user = {
                email: "tony@stark.com",
                password: "password123"
            }

            inMemoryUserRepository.users = [user]

            const credentials = {
                email: user.email,
                password: "invalid password"
            }

            // ACT
            const { status, message } = await userService.signIn(credentials)

            //ASSERT
            expect(status).toBe(500);
            expect(message).toBeDefined();
        })

        it('should not login a user if email is not valid', async () => {
            // ARRANGE
            const user = {
                email: "tony@stark.com",
                password: "password123"
            }

            inMemoryUserRepository.users = [user]

            const credentials = {
                email: "invalid email",
                password: user.password
            }

            // ACT
            const { status, message } = await userService.signIn(credentials)

            //ASSERT
            expect(status).toBe(500);
            expect(message).toBeDefined();
        })

        it('should not login a user if does not exist', async () => {
            // ARRANGE
            const credentials = {
                email: "tony@stark.com",
                password: "password123"
            }
            inMemoryUserRepository.users = []

            // ACT
            const { status, message } = await userService.signIn(credentials)

            // ASSERT
            expect(status).toBe(500);
            expect(message).toBeDefined();
        })
    });

    describe('get user profile',  () => {
        it('should get user profile', async () => {
            // ARRANGE
            const token = 'token'
            const user = {
                firstName: 'firstname',
                lastName: 'lastname'
            }

            inMemoryUserRepository.users = [user]

            // ACT
            const response = await userService.getUserProfile(token)

            // ASSERT
            expect(response.status).toBe(200)
            expect(response.body).toEqual(user)
        })
    })

    describe('update user profile',  () => {
        it('should update user profile', async () => {
            // ARRANGE
            const token = 'token'
            const user = {
                firstName: 'firstname',
                lastName: 'lastname'
            }
            inMemoryUserRepository.users = [user]
            const newFirstName = 'updated first'
            const newLastName = 'updated last'
            const updatedProfile = {
                firstName: newFirstName,
                lastName: newLastName
            }

            // ACT
            const response = await userService.updateUserProfile({newFirstName, newLastName, token})

            // ASSERT
            expect(response.status).toBe(200)
            expect(response.body).toEqual(updatedProfile)
        })
    })
})
