import { userLogIn, userLogOut, loadUserData } from "@/store/slices/userSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CallData from "@/ultil/callData";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data, status } = useSession();
  const currentState = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    async function Authenticating() {
      console.log("userName: " + currentState.userName)
      console.log("userEmail: " + currentState.userEmail)
      if (status === "unauthenticated") {
        dispatch(userLogOut());
        console.log("logged out");
      } else if (status === "authenticated" && currentState.userEmail === "") {
        dispatch(userLogIn(data.user.email));
        console.log(data.user.email);
        const loadingUserData = await CallData(
          null,
          "/api/login/"+data.user.email,
          "GET"
        ).then((res) => {
            console.log("Fetched");
            if (res.data.length === 0) {
              router.push("/register");
              return;
            }
            const loadedUserData ={
              username: res.data[0].userName,
              email: res.data[0].email,
              typeOfUser: res.data[0].typeOfUser,
              description: res.data[0].description,
              _id : res.data[0]._id,
            }
            dispatch(loadUserData(loadedUserData));
          })
        
      }
    };
    Authenticating();
    console.log("currentState :" + currentState.userName)
  }, []);
  console.log(data);
  console.log(status);
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <h1> hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + " photo"} />
        <button onClick={signOut}>sign out</button>
        <div>{currentState.userEmail}</div>
        <div>{currentState.userName}</div>
        <div>{currentState.userId}</div>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>sign in with gooogle</button>
    </div>
  );
}
