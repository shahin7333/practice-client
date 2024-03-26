"use client";
import toast from "react-hot-toast";
import React, { useState } from "react";
import CommonModal from "../common/CommonModal";
import { TrashIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const faqData = [
    {
      _id: 1,
      title:
        "Hello fa jfsdq sfads fadasdf afdsasd fasdf fsdasdff fasdf fsdasdf",
      desc: "Here will be description.",
    },
    {
      _id: 2,
      title: "Hello faq",
      desc: "Here will be description.",
    },
    {
      _id: 3,
      title: "Hello faq",
      desc: "Here will be description.",
    },
    {
      _id: 4,
      title: "Hello faq",
      desc: "Here will be description.",
    },
  ];
  const [open, setOpen] = useState(false);
  const [faqForm, setFaqForm] = useState({
    title: "",
    desc: "",
  });
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteFaqId, setDeleteFaqId] = useState(null);
  const [deleteFaqTitle, setDeleteFaqTitle] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaqForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", faqForm);
    setOpen(false);
  };

  const handleDeleteFaq = (item) => {
    setDeleteFaqId(item._id);
    setDeleteFaqTitle(item.title);
    setDeleteOpen(true);
  };

  return (
    <div className="p-4 md:p-6">
      <div>
        <div className="sm:flex justify-between items-center">
          <div className="sm:flex-auto">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              FAQ List
            </h1>
            <p className="mt-2 text-sm text-gray-700">A list of all FAQ.</p>
          </div>
          <button
            type="submit"
            onClick={() => setOpen(true)}
            className="flex justify-center bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white"
          >
            Add New
          </button>
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
                      Title
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 text-left text-sm font-medium text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 py-3.5 px-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {faqData?.map((item) => (
                    <tr key={item._id} className="even:bg-gray-50 w-full">
                      <td className=" py-2.5 px-4 text-sm text-gray-900 w-[30%]">
                        {item.title}
                      </td>
                      <td className=" py-2.5 px-4 text-sm text-gray-700 w-[60%]">
                        {item.desc}
                      </td>
                      <td className="py-3 px-4 flex gap-2 justify-center">
                        <div
                          onClick={() => handleDeleteFaq(item)}
                          className="text-red-500 hover:text-red-600 cursor-pointer"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        content={
          <form onSubmit={handleSubmit}>
            <h1 className="text-lg font-semibold mb-6">Add New FAQ</h1>
            <div className="mb-4">
              <p className="text-xs mb-1">FAQ title</p>
              <input
                type="text"
                required
                name="title"
                value={faqForm.title}
                onChange={handleChange}
                className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
              />
            </div>
            <div>
              <p className="text-xs mb-1">FAQ description</p>
              <textarea
                id="desc"
                name="desc"
                type="text"
                required
                value={faqForm.desc}
                onChange={handleChange}
                className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex justify-center bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-none"
              >
                Save
              </button>
            </div>
          </form>
        }
        open={open}
        setOpen={setOpen}
      />

      <CommonModal
        content={
          <>
            <h1 className="text-sm font-semibold mb-6 text-center">
              Do you want to delete {deleteFaqTitle}
              <span className="text-red-500 text-sm font-medium">{}</span> ?
            </h1>
            <div className="flex justify-center gap-2 mt-4">
              <button
                type="submit"
                onClick={() => setDeleteOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => handleDeleteFaq(deleteFaqId)}
                className="flex justify-center bg-red-500 px-6 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-none"
              >
                Confirm
              </button>
            </div>
          </>
        }
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />
    </div>
  );
};

export default FAQ;
