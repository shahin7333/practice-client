"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import AdminHeader from "../client/layout/AdminHeader";
import ClientHeader from "../client/layout/ClientHeader";

function AppNavbar() {
  const pathname = usePathname();

  return !pathname.includes("/admin") ? (
    <Fragment>
      <ClientHeader />
    </Fragment>
  ) : (
    <Fragment>
      <AdminHeader />
    </Fragment>
  );
}

export default AppNavbar;
