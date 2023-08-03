import ProjectCard from "./components/projectCard/page";

const projectCardNames = ["Something", "Something eklse", "Soemthing else else"]

export default function ProjectPanel(){
    return (
        <div>
            {projectCardNames.map((value, index) => {
                return(<ProjectCard key={"project-card-index-"+index} name={value}/>)
            })}
        </div>
    )
}