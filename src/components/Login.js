import React from 'react'
import axios from "axios"
import { USER_API_END_POINT } from '../utils/constant'
import { useState } from 'react'
export default function LOGIN() {

    const [islogin, setIsLogin] = useState(true)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        if (islogin) {

            try {
                const res = await axios.post(`${USER_API_END_POINT}/LOGIN`, { email, password }, {
                    headers: {
                        'Content-type': "application/json",
                    withCredentials: true}
                })
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
                    headers: {
                        'Content-type': "application/json",
                    
                    withCredentials: true}
                })
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
                         }

        const loginsignuphandler = () => {
            setIsLogin(!islogin)
        }


        return (<div className='w-screen h-screen flex items-center justify-center'>
            <div className='flex items-center justify-evenly w-[80%]' >
                <div>
                    <img className='ml-2'
                        width={"280px"}
                        src='https://tse4.mm.bing.net/th?id=OIP.biG9UdrkNGTbvX1YvOvY4AHaHa&pid=Api&P=0&h=180'
                        alt='twit-logi' />

                </div>
                <div>
                    <div className='my-6' >
                        <h1 className='font-bold text-6xl' > Happening Now </h1> </div>
                    <h1 className='mt-4  mb-2 text-2xl font-bold' > {islogin ? "Login" : "Signup"} </h1>

                    <form onSubmit={submitHandler} className='flex flex-col w-[50%]'> {!islogin && (<>

                        <input type='text'
                            value={name} onChange={(e) => setName(e.target.value)}
                            placeholder='Name'
                            className='outline-blue-200 border border-gray-700 px-3 py-2 rounded-full my-1 font-semibold' />

                        <input type='text'
                            value={username} onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                            className='outline-blue-200 border border-gray-700 px-3 py-2 rounded-full my-1 font-semibold' />
                    </>)
                    }
                        <input type='email'
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            className='outline-blue-200 border border-gray-700 px-3 py-2 rounded-full my-1 font-semibold' />

                        <input type='password'
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            className='outline-blue-200 border border-gray-700 px-3 py-2 rounded-full my-1 font-semibold' />
                        <button className='bg-[#1D9BF0] border-none py-1 rounded-full text-lg text-white' > {islogin ? "Login" : "Create Account"} </button>
                        <h1> {islogin ? "Don't have an account ? " : "Already have an account ? "} < span onClick={loginsignuphandler}
                            className=' font-bold text-blue-400' > {islogin ? "Signup" : "Login"} </span></h1>
                    </form>
                </div>
            </div>
        </div>

        )

    
}