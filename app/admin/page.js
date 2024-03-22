"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Card from "../../components/admin/Card";
import AdminTable from "../../components/admin/AdminTable";

const DashboardPage = () => {
  const session = useSession()
  if (session?.status === 'unauthenticated') {
    redirect('/auth/login')
  }

  return (
    <>
      <Card />
      <AdminTable />
    </>
  );
};

export default DashboardPage;
