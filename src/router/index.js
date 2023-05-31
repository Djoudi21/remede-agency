import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../pages/signIn";
import UserProfile from "../pages/userProfile";
import React from "react";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/user/profile",
        element: <UserProfile />,
        // errorElement: <ErrorPage />,
    },
    // {
    //     path: "*",
    //     element:  <ErrorPage />,
    // },
]);

export default router
