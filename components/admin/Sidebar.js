"use client";

import Link from "next/link";
import { adminSidebarData } from "./data";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-6">
      <ul role="list">
        {adminSidebarData.map((item, index) => (
          <li key={index} className="mb-2">
            <Link
              href={item.subPath[0].href}
              className={`group flex gap-x-2 items-center px-4 py-1.5 text-[14px] font-semibold ${pathname === item.subPath[0].href ||
                  (item.subPath[0].href.length > 10 &&
                    pathname.startsWith(item.subPath[0].href))
                ? "text-[#11181C] rounded-tiny"
                  : "text-[#73737C]"
                }`}
            >
              <item.icon
                className="w-5 h-5"
                color={
                  pathname === item.subPath[0].href ||
                    (item.subPath[0].href.length > 10 &&
                      pathname.startsWith(item.subPath[0].href))
                    ? "#11181C"
                    : "#73737C"
                }
              />
              {item.name}
            </Link>
            <ul className="pl-8">
              {item.subPath.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.href}
                    className={`group flex gap-x-2 items-center px-4 py-2 text-[14px] ${pathname === subItem.href
                        ? "text-[#11181C] font-semibold"
                        : "text-[#73737C]"
                      }`}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdminSidebar;
