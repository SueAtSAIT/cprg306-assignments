"use client";

// reference for changing to the disabled state:
// https://stackoverflow.com/questions/44896924/how-to-disable-button-based-on-state
// which makes the alert never show up so can remove the if/else structure in the functions

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      alert("You can't put more than 20 in your cart, GreedyGuts!");
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Quantity can't be below 1 if you're adding an item.");
    }
  };

  return (
    <div className="text-center">
      <p className="m-5 text-xl">
        Quantity: <span className="text-3xl"> {quantity}</span>
      </p>
      <div className="flex flex-row gap-3 max-w-sm m-auto">
        {/* TODO: figure out how to nest the disabled function in the parent function */}
        <button
          onClick={decrement}
          disabled={quantity == 1 ? true : false}
          className="basis-1/2 rounded-full m-4 p-4 border-2 bg-white hover:bg-gray-200 active:bg-gray-500 disabled:bg-gray-100 disabled:text-white disabled:border-0 active:text-white">
          Remove 1
        </button>
        <button
          onClick={increment}
          disabled={quantity == 20 ? true : false}
          className="basis-1/2 rounded-full m-4 p-4  bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-900 hover:text-white disabled:bg-gray-100 disabled:text-white ">
          Add 1
        </button>
      </div>
      <p className="italic">Quantity can be from 1 to a max of 20.</p>
    </div>
  );
}
