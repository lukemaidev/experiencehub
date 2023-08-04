import { useEffect, useState } from "react";


const useFetchData = (url, options) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const getDatas = async () => {
        let workingUrl = url;
        console.log(workingUrl)
            
        const response = await fetch(workingUrl, options);
        if (response.ok){
            const data = await response.json();
            setLoading(true);
            setData(data);
        }
        else{
            setLoading(true);
            setError(response.statusText);
        }  
    }

    useEffect(() => {
        if(!loading) getDatas();
        
    }, [loading]);
    
    return {
        loading, data, error
    }
}

export default useFetchData;