import useInput from "@/hooks/useInput";
import PostData from "@/ultil/postData";

export default function ProjectForm() {
    const title = useInput("");
    const description = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title.value,
            description: description.value
        }
        //PostData(data, process.env.BACKEND_URL+"project");
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required onChange={title.onChange} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" required onChange={description.onChange} />
            <button type="submit">Submit</button>
        </form>
    )
}