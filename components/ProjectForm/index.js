import useInput from "@/hooks/useInput";
import CallData from "@/ultil/callData";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProjectForm() {
  const projectName = useInput("");
  const projectDescription = useInput("");
  const [sendingData, setSendingData] = useState(false);
  const userId = useSelector((state) => state.users);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userId);
    const data = {
      projectName: projectName.value,
      projectDescription: projectDescription.value,
      projectCreatorId: userId.userId,
      timeCreated: Date.now(),
      timeDelivered: "Pending",
      projectDelivererIds: []
    };

    setSendingData(true);
    console.log(sendingData);
    const respondData = await CallData(data, "api/project", "POST").then(function (response) {
      setSendingData(false);
      console.log(response);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="projectName">Project Name</label>
      <input
        type="text"
        id="projectName"
        name="projectName"
        required
        onChange={projectName.onChange}
      />
      <label htmlFor="projectDescription">Description</label>
      <input
        type="text"
        id="projectDescription"
        name="projectDescription"
        required
        onChange={projectDescription.onChange}
      />
      <button type="submit" onClick={() => setSendingData(true)}>
        Submit
      </button>
      {sendingData ? <p>True</p> : <p>False</p>}
      {sendingData && <p>Sending data...</p>}
    </form>
  );
}
