import React from 'react'
import Right from './Right'
import Left from './Left'
import Feed from './Feed'
import { Outlet } from 'react-router-dom'
import Login from './Login'
export default function Home() {
    return (
        <div className='flex justify-between w-[80%] mx-auto' >

            <Left />

            <Outlet />

            <Right />

        </div>
    )
}