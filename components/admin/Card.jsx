import {
  CheckCircleIcon,
  CloudIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Card = () => {
  const [cards, setCards] = useState([
    {
      name: "Products",
      total: "23",
      color: "bg-indigo-500",
      icon: <ShoppingCartIcon className="h-8 w-8 text-white" />,
    },
    {
      name: "Orders",
      total: "10",
      color: "bg-green-500",
      icon: <CheckCircleIcon className="h-8 w-8 text-white" />,
    },
    {
      name: "Errors",
      total: "5",
      color: "bg-red-500",
      icon: <XCircleIcon className="h-8 w-8 text-white" />,
    },
    {
      name: "Cloud Storage",
      total: "100GB",
      color: "bg-sky-500",
      icon: <CloudIcon className="h-8 w-8 text-white" />,
    },
  ]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} p-4 md:p-6 shadow flex justify-between items-center`}
        >
          <div>
            <p className="text-lg font-semibold text-white">{card.total}</p>
            <p className="text-sm font-medium text-white">{card.name}</p>
          </div>
          <div>{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
