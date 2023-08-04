import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const useFetchData = (url, options) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const sortByFilter = useSelector(state => state.filter.sort);

    const getDatas = async () => {
        let workingUrl = url;
        console.log(sortByFilter)
        switch(sortByFilter){
            case "lowestPrice":
                workingUrl = url + "?sort=lowest-price";
                break;
            case "highestPercentage":
                workingUrl = url + "?sort=highest-percentage";
                break;
            case "mostValue":
                workingUrl = url + "?sort=biggest-discount-amount";
                break;
        }
        console.log(workingUrl)
            
        const response = await fetch(workingUrl, options);
        if (response.ok){
            const data = await response.json();
            setLoading(true);
            setData(data);
            console.log(data)
        }
        else{
            setLoading(true);
            setError(response.statusText);
        }  
    }

    useEffect(() => {
        setLoading(false);
        
    }, [sortByFilter]);

    useEffect(() => {
        if(!loading) getDatas();
        
    }, [loading]);
    
    return {
        loading, data, error
    }
}

export default useFetchData;