import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
const page = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <CheckCircleIcon className="h-12 w-12 text-green-600" />
      <p className="text-lg font-medium leading-8">Thank you for your order.</p>
    </div>
  );
};

export default page;
