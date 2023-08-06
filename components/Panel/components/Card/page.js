const testingSkills = ["1","2","3"]

export default function PanelCard(props){
    return(
        <div>
            {props.name}
            {testingSkills.map((value,index) =>
            {
                return(<div key={"project-card-skills"+index}>
                    {value}
                </div>)
            })}
        </div>
    )
}