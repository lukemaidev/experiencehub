import { useEffect, useState } from "react";
import CallData from "@/ultil/callData";
import PanelCard from "./components/Card";
import CreatingProjectButton from "./components/CreatingProjectButton";


export default function Panel(props) {
    const [page, setPage] = useState(0);
    const [allPanelData, setAllPanelData] = useState([]);
    const [data, setData] = useState([]);
    const elementPerPage = 2;

    //Get the data of all the projects
    useEffect(() => {
        async function fetchData() {
            const data = await CallData(null, "/api/project", "GET").then((res) => {
                console.log("Fetched");
                console.log(res.data);
                setAllPanelData(res.data);
                console.log(allPanelData);
            })
        }
        fetchData();
    }, [])

    //Controlling the page content based on the page number
    useEffect(() => { ;
        setData(allPanelData.slice(elementPerPage * page, elementPerPage * page + elementPerPage)) 
        console.log(allPanelData.slice(elementPerPage * page, elementPerPage * page + elementPerPage));
    }, 
    [page, allPanelData])

    //Controlling the page number
    const pageButtonPressed = (pageNum) => {
        if (pageNum > -1 && pageNum < allPanelData.length / elementPerPage + 1) {
            setPage(pageNum)
        }
    }

    return (
        <div>
            <CreatingProjectButton/>
            <button onClick={() => pageButtonPressed(page - 1)}>{"Page Num: " + page}</button>
            <button onClick={() => pageButtonPressed(page + 1)}>{"Page Num: " + page}</button>
            {data.map((value, index) => {
                return (<PanelCard key={"project-card-index-" + index} 
                projectName={value.projectName} 
                projectId={value._id}
                projectDescription={value.projectDescription}
                projectCreatorId={value.projectCreatorId}
                timeCreated={value.timeCreated}
                timeDelivered={value.timeDelivered}
                projectDelivererIds={value.projectDelivererIds}
                />)
            })}
        </div>
    )
}