"use client";

import Navbar from "@/components/Navbar";
import useFetchData from "@/hooks/useFetchData";


export default function UserPage({params}){

    //Call API to get user data
    //const userData = useFetchData(process.env.BACKEND_URL+"/api/v1/user"+params.userId);
    
    return(
        <div className="w-screen h-screen bg-white text-black">
            <Navbar/>
            Content for user with id {params.userId}
        </div>
    )
}