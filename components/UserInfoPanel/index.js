import useFetchData from "@/hooks/useFetchData";

export default function UserInfoPanel(props){
    const userData = useFetchData("/api/user/"+props.userId)
    return(
        <div>
            <div>{userData.data.userName}</div>
            <div>{userData.data.email}</div>
            <div>{userData.data.typeOfUser}</div>
            <div>{userData.data.description}</div>
        </div>
    )
}