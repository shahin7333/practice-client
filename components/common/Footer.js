"use client";

import React from "react";
import Footer from "../client/layout/Footer";
import { usePathname } from "next/navigation";

function AppFooter() {
    const pathname = usePathname();

    return (
        (!pathname.includes("/admin")) ? (
            <footer className="w-full mx-auto bottom-0 px-4 whitespace-nowrap border-t-1 bg-gray-100">
                <Footer />
            </footer>
        ) : ""
    )
}

export default AppFooter;
