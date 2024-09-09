import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './Login.js'
import Home from './Home'
import Profile from './Profile'
import Feed from './Feed'

export default function Body() {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <Feed />
                },
                {
                    path: "/profile",
                    element: <Profile />
                }
            ]


        },
        {
            path: "/login",
            element: <Login />
        }
    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}