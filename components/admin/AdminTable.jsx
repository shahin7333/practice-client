import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

const AdminTable = () => {
  const [people, setPeople] = useState([
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    // More people...
  ]);
  return (
    <div className="mt-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-gray-900">
            Products maintainance table
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the prdouct in your account including their name,
            title.
          </p>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="overflow-x-auto border">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-4 text-left text-sm font-medium text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-900"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {people.map((person) => (
                  <tr key={person.email} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4 text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <PencilSquareIcon className="h-5 w-5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
