'use client';

import Blank from "@/components/Blank";
import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
export default function IndexPage() {
  const { data, status } = useSession();
  if (status === "loading") return <h1> loading... please wait</h1>;
  return(<Navbar />)
  
}
