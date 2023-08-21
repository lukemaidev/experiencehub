"use client";

import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/RegisterForm";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function RegisterPage () {
    const currentState = useSelector((state) => state.users);
    const router = useRouter();

    return (<div><Navbar/><RegisterForm/></div>)
}