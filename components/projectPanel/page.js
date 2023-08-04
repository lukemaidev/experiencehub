import { useEffect, useState } from "react";
import ProjectCard from "./components/projectCard/page";


export default function ProjectPanel(props) {
    const [page, setPage] = useState(0);
    const allPanelData = props.data;
    const [data, setData] = useState([]);
    const elementPerPage = 2;
    useEffect(() => { ;
        setData(allPanelData.slice(elementPerPage * page, elementPerPage * page + elementPerPage)) 
        console.log(allPanelData.slice(elementPerPage * page, elementPerPage * page + elementPerPage));
    }, 
    [page])

    const pageButtonPressed = (pageNum) => {
        if (pageNum > -1 && pageNum < allPanelData.length / elementPerPage + 1) {
            setPage(pageNum)
        }
    }

    return (
        <div>
            <button onClick={() => pageButtonPressed(page - 1)}>{"Page Num: " + page}</button>
            <button onClick={() => pageButtonPressed(page + 1)}>{"Page Num: " + page}</button>
            {data.map((value, index) => {
                return (<ProjectCard key={"project-card-index-" + index} name={value.title} />)
            })}
        </div>
    )
}