import TagIcon from "../icons/TagIcon";
import OrderIcon from "../icons/OrderIcon";

export const adminSidebarData = [
    {
        name: "Category",
        icon: TagIcon,
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
        icon: TagIcon,
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
        icon: TagIcon,
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
        icon: OrderIcon,
        subPath: [
            {
                name: "Order List",
                href: "",
            }
        ]
    },
]