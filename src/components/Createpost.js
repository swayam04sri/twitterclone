import React from 'react'
import Avatar from "react-avatar"
import { CiImageOn } from "react-icons/ci";


export default function Createpost() {
    return (
        <div className='w-[100%]'>
            <div>

                <div className='flex item-center justify-evenly  border-b border-gray-500'>
                    <div className='cursor-pointer hover:bg-slate-400 w-full text-center px-4 py-3'>
                        <h1 className='font-bold text-gray-400 text-lg '>For you</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-slate-400 w-full text-center px-4 py-3'>
                        <h1 className='font-bold text-gray-400 text-lg  '>Following</h1></div>
                </div>
                <div>
                    <div className='flex items-center p-4'>
                        <div>
                            <Avatar src="https://tse1.mm.bing.net/th?id=OIP.VTBzGQySOYLDke_xg2OfEQHaFj&pid=Api&P=0&h=180" size="40" round={true} />
                        </div>
                        <input className='w-full border-none text-lg ml-2'
                            type='Text'
                            placeholder='Whats happening?' />
                    
                        </div>
                        <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                        <div>
                            <CiImageOn />
                        </div>

                        <button className='bg-[#1D9BF0] px-2 py-1 border-none m-2 rounded-full text-lg'>Post</button>
                        </div>
                    </div>
                </div>
            </div>
     
    )
}