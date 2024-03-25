"use client";
import React from "react";
import { useState } from "react";

const ContactList = ({ contactData }) => {
  console.log("d,", contactData);
  return (
    <div className="mt-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-gray-900">
            Contact table
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Contact in your project including their email,
            phone, message.
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-gray-900"
                  >
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {contactData?.map((person) => (
                  <tr key={person._id} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-2.5 px-4 text-xs font-medium text-gray-900">
                      {person?.email}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4 text-xs text-gray-500">
                      {person?.phone}
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-500 max-w-[500px]">
                      {person?.msg}
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

export default ContactList;
