"use client";

import useFetchData from "@/hooks/useFetchData";
import { useRouter } from "next/router";

export default function ProjectPage(){
    const router = useRouter();
    //Call API to get project data
    //const projectData = useFetchData(process.env.BACKEND_URL+"/api/v1/project"+projectId);

    //Dummy data
    
    return(
        <div className="w-screen h-screen bg-white">
            {router.query.projectId}
        </div>
    )
}