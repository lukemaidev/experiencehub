export default function PostData(data, url){
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error("Something went wrong");
        }
    }).catch(error => {
        console.log(error);
    })
}