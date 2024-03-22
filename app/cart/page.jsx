"use client";
import React from "react";
import SCart from "../../components/client/cart/SCart";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = () => {
   const session = useSession()
  if (session?.status === 'unauthenticated') {
    redirect('/auth/login')
  }

  return <SCart />;
};

export default page;
