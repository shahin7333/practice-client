"use client";
import React from "react";
import SCart from "../../components/client/cart/SCart";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = () => {
   const session = useSession()
  if (session?.status === 'unauthenticated' || session?.data?.user?.role === 'superAdmin') {
    redirect('/auth/login')
  }

  return <SCart />;
};

export default page;
