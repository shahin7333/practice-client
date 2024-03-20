import {
  Bars3BottomLeftIcon,
  CircleStackIcon,
  DocumentArrowUpIcon,
  HomeIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

export const adminSidebarData = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    subPath: [
      {
        name: "Dashboard",
        href: "/admin",
      },
    ],
  },
  {
    name: "Category",
    icon: ListBulletIcon,
    subPath: [
      {
        name: "Category List",
        href: "/admin/categories/category-list",
      },
      {
        name: "Add Category",
        href: "/admin/categories/add-category",
      },
    ],
  },
  {
    name: "Brands",
    icon: Bars3BottomLeftIcon,
    subPath: [
      {
        name: "Brand List",
        href: "/admin/brands/brand-list",
      },
      {
        name: "Add Brand",
        href: "/admin/brands/add-brand",
      },
    ],
  },
  {
    name: "Products",
    icon: CircleStackIcon,
    subPath: [
      {
        name: "Product List",
        href: "/admin/products/product-list",
      },
      {
        name: "Add Product",
        href: "/admin/products/add-product",
      },
    ],
  },
  {
    name: "Order List",
    icon: DocumentArrowUpIcon,
    subPath: [
      {
        name: "Order List",
        href: "/admin/order-list",
      },
    ],
  },
];
