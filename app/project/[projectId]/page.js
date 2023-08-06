"use client";

import useFetchData from "@/hooks/useFetchData";


export default function ProjectPage({params}){

    //Call API to get project data
    //const projectData = useFetchData(process.env.BACKEND_URL+"/api/v1/project"+params.projectId);

    //Dummy data
    
    return(
        <div className="w-screen h-screen bg-white text-black">
            Something {params.projectId}
        </div>
    )
}