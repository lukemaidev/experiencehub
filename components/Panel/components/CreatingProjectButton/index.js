

import { useRouter } from "next/navigation";

export default function CreatingProjectButton() {
    const router = useRouter();

    function handleOnClick(e){
        router.push("/createProject");
    }
    
    return(<button onClick={handleOnClick}>
        Create Project
    </button>)
}