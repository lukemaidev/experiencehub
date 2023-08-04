import { useEffect, useState } from "react";
import ProjectCard from "./components/projectCard/page";

const projectCardNames = ["Something", "Something eklse", "Soemthing else else"]

export default function ProjectPanel() {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const elementPerPage = 2;
    useEffect(() => { 
        setData(projectCardNames.slice(elementPerPage * page, elementPerPage * page + elementPerPage)) 
    }, 
    [page])

    const pageButtonPressed = (pageNum) => {
        if (pageNum > -1 && pageNum < projectCardNames.length / elementPerPage + 1) {
            setPage(pageNum)
        }
    }

    return (
        <div>
            <button onClick={() => pageButtonPressed(page - 1)}>{"Page Num: " + page}</button>
            <button onClick={() => pageButtonPressed(page + 1)}>{"Page Num: " + page}</button>
            {data.map((value, index) => {
                return (<ProjectCard key={"project-card-index-" + index} name={value} />)
            })}
        </div>
    )
}