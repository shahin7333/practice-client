import { Bars3BottomLeftIcon, CircleStackIcon, DocumentArrowUpIcon, HomeIcon, ListBulletIcon } from "@heroicons/react/24/outline";

export const adminSidebarData = [
    {
        name: "Dashboard",
        icon: HomeIcon,
        subPath: [
            {
                name: "Dashboard",
                href: "/admin",
            }
        ]
    },
    {
        name: "Category",
        icon: ListBulletIcon,
        subPath: [
            {
                name: "Category List",
                href: "/admin/category",
            },
            {
                name: "Add Category",
                href: "/admin/category/create",
            },
        ]
    },
    {
        name: "Brands",
        icon: Bars3BottomLeftIcon,
        subPath: [
            {
                name: "Brand List",
                href: "/admin/brand",
            },
            {
                name: "Add Brand",
                href: "/admin/brand/create",
            },
        ]
    },
    {
        name: "Products",
        icon: CircleStackIcon,
        subPath: [
            {
                name: "Product List",
                href: "/admin/products",
            },
            {
                name: "Add Product",
                href: "/admin/products/create",
            },
        ]
    },
    {
        name: "Order List",
        icon: DocumentArrowUpIcon,
        subPath: [
            {
                name: "Order List",
                href: "",
            }
        ]
    },
]