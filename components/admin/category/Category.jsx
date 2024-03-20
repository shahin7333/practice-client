"use client";
import React, { useState } from "react";
import CommonModal from "../common/CommonModal";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import axiosInstance from "../../../services/axiosInstance";
import toast from "react-hot-toast";

const Category = ({categories}) => {
  const [open, setOpen] = useState(false);
  const [allCategories,setAllCategories]=useState(categories)
  const [editOpen, setEditOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);
  const [deleteCategoryName, setDeleteCategoryName] = useState("");
  
  const handleEditCategory = (categoryId, categoryName) => {
    setEditCategoryId(categoryId);
    setEditCategoryName(categoryName);
    setEditOpen(true);
  };
  const handleDeleteCategory = (categoryId, categoryName) => {
    setDeleteCategoryId(categoryId);
    setDeleteCategoryName(categoryName);
    setDeleteOpen(true);
  };

   const handleChange = (e) => {
    setCategoryName(e.target.value);
   };
  
  const handleEditChange = (e) => {
    setEditCategoryName(e.target.value)
  }
  
   const handleSubmit = (e) => {
    e.preventDefault();
    
    axiosInstance
      .post('/categories', {category_name: categoryName})
      .then(res => {
        toast.success(res.data.message)
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })
      .finally(() => {
        setCategoryName('')
        setOpen(false)
      })
   };
  
  const handleDelete = (id) => {    
    axiosInstance
      .delete(`/categories/${id}`,)
      .then(res => {
        setAllCategories(res.data.payload.categories)
        toast.success(res.data.message)
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })
      .finally(() => {
        setDeleteOpen(false)
      })
  };

  return (
    <div className="p-4 md:p-6">
      <div>
        <div className="sm:flex justify-between items-center">
          <div className="sm:flex-auto">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Category List
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all categories.
            </p>
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
                      Category
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
                  {allCategories?.map((category, index) => (
                    <tr key={index} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                        {category.category_name}
                      </td>
                      <td className="py-3 px-4 flex gap-2 justify-center">
                        <div
                          className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                          onClick={() =>
                            handleEditCategory(category._id, category.category)
                          }
                        >
                          <PencilSquareIcon className="h-4 w-4" />
                        </div>
                        <div
                          onClick={() =>
                            handleDeleteCategory(
                              category._id,
                              category.category
                            )
                          }
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
            <h1 className="text-lg font-semibold mb-6">Add Category Name</h1>
            <div>
              <p className="text-xs mb-1">Category Name</p>
              <input
                type="text"
                required
                value={categoryName}
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
          <form onSubmit={handleEditSubmit}>
            <h1 className="text-lg font-semibold mb-6">Edit Category Name</h1>
            <div>
              <p className="text-xs mb-1">Category Name</p>
              <input
                id="category_name"
                type="text"
                required
                value={editCategoryName}
                onChange={handleEditChange}
                className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button
                type="submit"
                onClick={() => setEditOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => setEditOpen(false)}
                className="flex justify-center bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        }
        open={editOpen}
        setOpen={setEditOpen}
      />
      <CommonModal
        content={
          <>
            <h1 className="text-sm font-semibold mb-6 text-center">
              Do you want to delete this{" "}
              <span className="text-red-500 text-sm font-medium">
                {deleteCategoryName}
              </span>{" "}
              category?
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
                onClick={() =>handleDelete(deleteCategoryId)}
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

export default Category;
