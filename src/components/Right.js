import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

export default function Right() {
    return (<>
        <div className='w-[20%]'>

            <div className=' flex  text-gray-400items-center text-center mt-5'>
                <CiSearch size={"20px"} />

                <input type='text' className='bg-transparent outline-none px-2'
                    placeholder='Search' />
            </div>
            <div className='p-4 bg-gray-200 rounded-2xl my-4'>
                <h1 className='font-bold text-lg my-3'>Who To Follow</h1>
                <div className='flex items-center justify-between my-3'>
                <div className='flex'>  </div>
                    <Avatar src="https://tse1.mm.bing.net/th?id=OIP.VTBzGQySOYLDke_xg2OfEQHaFj&pid=Api&P=0&h=180" size="40" round={true} />
                    <div>

                        <div className='ml-2'>
                            <h1 className='font-bold'>patel
                            </h1><p className='text-sm'>@sdfghjgjggg</p>

                        </div>
                     
                    </div> 
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div> 
                  </div>
                </div>
                <div className='p-4 bg-gray-200 rounded-2xl my-4'>
                <h1 className='font-bold text-lg my-3'>Who To Follow</h1>
                <div className='flex items-center justify-between my-3'>
                <div className='flex'>  </div>
                    <Avatar src="https://tse1.mm.bing.net/th?id=OIP.VTBzGQySOYLDke_xg2OfEQHaFj&pid=Api&P=0&h=180" size="40" round={true} />
                    <div>

                        <div className='ml-2'>
                            <h1 className='font-bold'>patel
                            </h1><p className='text-sm'>@sdfghjgjggg</p>

                        </div>
                     
                    </div> 
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div> 
                  </div>
                </div>
                <div className='p-4 bg-gray-200 rounded-2xl my-4'>
                <h1 className='font-bold text-lg my-3'>Who To Follow</h1>
                <div className='flex items-center justify-between my-3'>
                <div className='flex'>  </div>
                    <Avatar src="https://tse1.mm.bing.net/th?id=OIP.VTBzGQySOYLDke_xg2OfEQHaFj&pid=Api&P=0&h=180" size="40" round={true} />
                    <div>

                        <div className='ml-2'>
                            <h1 className='font-bold'>patel
                            </h1><p className='text-sm'>@sdfghjgjggg</p>

                        </div>
                     
                    </div> 
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div> 
                  </div>
                </div>
               
        </div>
         </>
    )
}