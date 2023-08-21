const testingSkills = ["Skill 1","Skill 2","Skill 3"]

export default function PanelCard(props){
    return(
        <div>
            {props.projectName}
            {props.projectDescription}
            {props.projectCreatorId}
            {props.timeCreated}
            {props.timeDelivered}
            {props.projectDelivererIds.map((value, index)=>{
                return(<div key={props.projectId+value}>
                    {value}
                </div>)
            })}
            {testingSkills.map((value,index) =>
            {
                return(<div key={"project-card-skills"+index}>
                    {value}
                </div>)
            })}
        </div>
    )
}