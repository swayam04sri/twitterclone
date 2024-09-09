import React from 'react';
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { CiHashtag } from "react-icons/ci";
import { Link } from 'react-router-dom';




export default function Left() {
    return ( <div className = 'w=[20%]' >
        <div >
        <div >
        <
        img className = 'ml-2'
        width = { "30px" }
        src = 'https://tse4.mm.bing.net/th?id=OIP.biG9UdrkNGTbvX1YvOvY4AHaHa&pid=Api&P=0&h=180'
        alt = 'twit-logi' / >
        </div> 
        <div className = 'my-4' >
        <Link to="/" className = 'flex items-center my-3 px-4 py-3 hover:bg-slate-400 hover:cursor-pointer rounded-full' >
        
        <div > < CiHome size = "28px"/>
        </div> 
        <h1 className = 'font-bold text-lg' > Home </h1>

        </Link> 
        <div className = 'flex items-center my-3 px-4 py-3 hover:bg-slate-400 hover:cursor-pointer rounded-full' >
        <div > < CiHashtag size = "28px"/>
        </div> 
        <h1 className = 'font-bold text-lg' > Explore </h1>

        </div> 
        <div className = 'flex items-center my-3 px-4 py-3 hover:bg-slate-400 hover:cursor-pointer rounded-full' >
        <div > < IoIosNotificationsOutline size = "28px"/>
        </div> 
        <h1 className = 'font-bold text-lg' > Notification </h1>

        </div> 
        
        <Link to= "/Profile" className = 'flex items-center my-3 px-4 py-3 hover:bg-slate-400 hover:cursor-pointer rounded-full' > <
        div > < CiUser size = "28px"/>

        
        </div> 
        <h1 className = 'font-bold text-lg' > Profile </h1>

        </Link> 
        <div className = 'flex items-center my-3 px-4 py-3 hover:bg-slate-400 hover:cursor-pointer rounded-full' >
        <div> < CiBookmark size = "28px"/>
        </div> 
        <h1 className = 'font-bold text-lg' > Bookmark </h1>

        </div> 
        <div className = 'flex items-center my-3 px-4 py-3 hover:bg-slate-400 hover:cursor-pointer rounded-full' >
        
        <div > < IoMdLogOut size = "28px"/>
        
        </div> 
        <h1 className = 'font-bold text-lg' > Log out </h1>

        
        </div> 
        <button className = 'px-4 py-2 text-md border-none bg-[#1D9BF0] w-full rounded-full font-bold ' > Post </button> 
        </div>


        
        </div>

        </div>
    )
}