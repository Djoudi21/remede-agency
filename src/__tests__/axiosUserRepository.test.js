import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import AxiosUserRepository from "../services/repositories/axiosUserRepository";

describe('axios user repository', () => {
    let axiosUserRepository
    beforeEach(() => {
        axiosUserRepository = new AxiosUserRepository()
    })
    describe('login',  () => {
        it('should login a user with valid credentials', async () => {
        // ARRANGE
        const credentials = {
            email: "tony@stark.com",
            password: "password123"
        }

        // ACT
        const response = await axiosUserRepository.signIn(credentials)

        //ASSERT
        expect(response.data.body.token).toBeDefined();
        expect(response.data.status).toBe(200);
    })
    });

    describe('get user profile', () => {
        it('should get user profile', async () => {
            // ARRANGE
            const credentials = {
                email: "tony@stark.com",
                password: "password123"
            }
            const response = await axiosUserRepository.signIn(credentials)
            const token = response.data.body.token

            // ACT
            const res = await axiosUserRepository.getUserProfile(token)

            // ASSERT
            expect(res.status).toBe(200)
            expect(res.body.firstName).toBeDefined()
            expect(res.body.lastName).toBeDefined()
        })
    })

    describe('update user profile', () => {
        it('should update user profile', async () => {
            // ARRANGE
            const credentials = {
                email: "tony@stark.com",
                password: "password123"
            }
            const response = await axiosUserRepository.signIn(credentials)
            const token = response.data.body.token
            const firstName = 'updated first'
            const lastName = 'updated last'

            // ACT
            const res = await axiosUserRepository.updateUserProfile({firstName, lastName, token})

            // ASSERT
            expect(res.status).toBe(200)
            expect(res.body.firstName).toEqual(firstName)
            expect(res.body.lastName).toEqual(lastName)
        })
    })
})
