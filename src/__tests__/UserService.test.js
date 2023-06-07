// import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import UserService from "../services/UserService";
import InMemoryUserRepository from "../services/repositories/inMemoryUserRepository";


describe('user service', () => {
    it('should login a user', async () => {
        const inMemoryUserRepository = new InMemoryUserRepository()
        const userService = new UserService(inMemoryUserRepository)
        const credentials = {
            email: "tony@stark.com",
            password: "password123"
        }
        const response = await userService.signIn(credentials)
        expect(response.token).toBeDefined();
        expect(response.status).toBe(200);
    })

    // it('should not login a user', async () => {
    //     const inMemoryUserRepository = new InMemoryUserRepository()
    //     const userService = new UserService(inMemoryUserRepository)
    //     const credentials = {
    //         email: "a@a.com",
    //         password: "123"
    //     }
    //     const { status } = await userService.signIn(credentials)
    //     expect(status).toBe(400);
    // })
})
