"use client";

import Navbar from "@/components/Navbar";
import Panel from "@/components/Panel";
import projectsData from "@/const/project";

export default function BrowsePage(){
    return(
        <div className="w-screen h-screen bg-white text-black">
            <Navbar/>
            <Panel data={projectsData}/>
        </div>
    )
}