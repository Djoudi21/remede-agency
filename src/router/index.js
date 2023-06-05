import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../pages/signIn";
import UserProfile from "../pages/userProfile";
import React from "react";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/user/profile",
        element: <UserProfile />,
    },
]);

export default router
