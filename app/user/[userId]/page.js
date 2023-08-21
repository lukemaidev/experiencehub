"use client";

import Navbar from "@/components/Navbar";
import UserInfoPanel from "@/components/UserInfoPanel";


export default function UserPage({params}){
    
    return(
        <div className="w-screen h-screen bg-white text-black">
            <Navbar/>
            <UserInfoPanel userId={params.userId}/>
        </div>
    )
}