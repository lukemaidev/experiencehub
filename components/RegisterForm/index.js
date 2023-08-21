import useInput from "@/hooks/useInput";
import CallData from "@/ultil/callData";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { loadUserData, userLogIn } from "@/store/slices/userSlice";

export default function RegisterForm() {
  const userName = useInput("");
  const typeOfUser = useInput("junior");
  const description = useInput("");
  const userEmail = useSelector((state) => state.users.userEmail);
  const userState = useSelector((state) => state.users);
  const [sendingData, setSendingData] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      userName: userName.value,
      email: userEmail,
      typeOfUser: typeOfUser.value,
      description: description.value,
    };

    setSendingData(true);
    console.log(data);
    try{
      const respondData = await CallData(data, "api/user", "POST")
      .then(function (res) {
      setSendingData(false);  
      console.log("Fetched");
      console.log(res.data);
      const loadedUserData =
      {
        username: res.data.userName,
        email: res.data.email,
        typeOfUser: res.data.typeOfUser,
        description: res.data.description,
      }
      dispatch(loadUserData(loadedUserData));
      router.push("/");
    }
    
    );
    console.log(respondData);
    } catch{(error) => {
      console.log(error);
    }};
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">Title</label>
      <input
        type="text"
        id="userName"
        name="userName"
        required
        onChange={userName.onChange}
      />
      <label htmlFor="typeOfUser">Type Of User</label>
      <select
        type="text"
        id="typeOfUser"
        name="typeOfUser"
        required
        onChange={typeOfUser.onChange}
      >
        <option value="junior">Junior</option>
        <option value="senior">Senior</option>
        <option value="client">Client</option>
      </select>
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        id="description"
        name="description"
        required
        onChange={description.onChange}
      />
      <button type="submit" onClick={() => setSendingData(true)}>
        Submit
      </button>
      {sendingData ? <p>True</p> : <p>False</p>}
      {sendingData && <p>Sending data...</p>}
    </form>
  );
}
