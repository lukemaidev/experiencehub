"use client";

import Navbar from "@/components/Navbar";
import useFetchData from "@/hooks/useFetchData";


export default function ProjectPage({params}){

    //Call API to get project data
    //const projectData = useFetchData(process.env.BACKEND_URL+"/api/v1/project"+params.projectId, method: "GET");
    
    return(
        <div className="w-screen h-screen bg-white text-black">
            <Navbar/>
            Content for project with id {params.projectId}
        </div>
    )
}