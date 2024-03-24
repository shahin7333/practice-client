import {
  Bars3BottomLeftIcon,
  CircleStackIcon,
  ClipboardDocumentListIcon,
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
    ],
  },
  {
    name: "Orders",
    icon: CircleStackIcon,
    subPath: [
      {
        name: "Order List",
        href: "/admin/orders",
      },
    ],
  },
  {
    name: "Contacts",
    icon: ClipboardDocumentListIcon,
    subPath: [
      {
        name: "Contact List",
        href: "/admin/contact-list",
      },
    ],
  },
];
