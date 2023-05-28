import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.module.scss';
import Home from './pages/home';
import SignIn from './pages/signIn';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UserProfile from "./pages/userProfile";
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
