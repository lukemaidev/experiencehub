const testingSkills = ["1","2","3"]

export default function ProjectCard(props){
    return(
        <div>
            {props.name}
            {testingSkills.map((value,index) =>
            {
                return(<div key={"project-card-skills"+index}>
                    {value.title}
                </div>)
            })}
        </div>
    )
}