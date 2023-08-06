'use client';

import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
export default function IndexPage() {
  return(<Navbar/>)
  
}
