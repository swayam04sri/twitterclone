import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


export default function Profile() {
    return (<>
        <div className='w-[50%] border-l border-r border-gray-300'>
            <div>
                <div className='flex items-center py-2'>
                    <Link to="/" className='p-2 rounded-full hover: bg-gray-100 cursor-pointer'>

                        <IoMdArrowBack size={"24px"} />
                    </Link>
                    <div className='ml-2'>
                        <h1 className='font-bold text-lg'>Patel</h1>
                        <p className='text-gray-300'>20posts</p>
                    </div>

                </div>
                <img src='https://pbs.twimg.com/profile_banners/1267184130187460610/1705944199/1080x360' alt='banner' />
                <div className='absolute top-56 ml-2 border-4 border-white rounded-full'>
                <Avatar src="https://tse1.mm.bing.net/th?id=OIP.VTBzGQySOYLDke_xg2OfEQHaFj&pid=Api&P=0&h=180" size="70" round={true} />
                </div>
                <div  className='text-right m-3'>
                    <button className='px-4 py-1  hover:bg-slate-200 rounded-full border border-gray-500'>
                        Edit profile
                    </button>
                </div>
                <div className='m-1'>
                    <h1 className='font-bold text-xl'>Patel</h1>
                    <p>@Usrname</p>
                </div>
                <div className='m-4 text-sm'>
                    <p>💎FAMILY💎DEGEN💎CRYPTO💎1000x💎CHANNEL 💎ANYTHING I POST IS NOT FINANCIAL ADVICE AND HIGH RISK PLEASE DYOR https://t.me/AnimeGems
                    💎TELEGRGRAM: @ crypt0maniac94</p>
                </div>
            </div>
        </div>

    </>
    )
}