import useFetchData from "@/hooks/useFetchData";

export default function ProjectInfoPanel(props){
    const projectData = useFetchData("/api/user/"+props.userId)
    return(
        <div>
            <div>{projectData.data.projectName}</div>
            <div>{projectData.data.projectDescription}</div>
            <div>{projectData.data.timeCreated}</div>
        </div>
    )
}