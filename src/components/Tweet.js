import React from 'react'
import Avatar from "react-avatar"
import { FaRegComment } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";

import { FaRegBookmark } from "react-icons/fa";


export default function Tweet() {
    return (
        <>
            <div className='border-b border-gray-700'>
                <div>
                    <div className=' flex p-4'>
                        <Avatar src="https://tse1.mm.bing.net/th?id=OIP.VTBzGQySOYLDke_xg2OfEQHaFj&pid=Api&P=0&h=180" size="40" round={true} />
                        <div className='ml-2 w-full'>

                            <div className=' flex items-center '>
                                <h1 className='font-bold'>umame</h1>
                                <p className='text-gray-500 text-sm ml-2'>@patel.2m</p>
                            </div>
                            <div>

                                <p>hello developers lets connect and improve together</p>
                            </div>
                            <div className=' flex justify-between my-3'>
                                <div className=' flex items-center'>
                                    <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>

                                        <FaRegComment size={"18px"} /></div>
                                    <p className='ml-2'>0</p></div>
                                <div className=' flex items-center'>
                                    <div className='p-2 hover:bg-rose-200 rounded-full cursor-pointer'>
                                        <CiHeart size={"24px"} />
                                    </div>
                                    <p className='ml-2'>0</p></div>
                                <div className=' flex items-center'>
                                    <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                    <FaRegBookmark size={"24px"} />
                                </div>
                                <p className='ml-2'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
</>
    )
}