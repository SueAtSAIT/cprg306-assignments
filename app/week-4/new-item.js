"use client";

// reference for changing to the disabled state:
// https://stackoverflow.com/questions/44896924/how-to-disable-button-based-on-state
// but it feels like a higher-order function could be used for this and reset (TODO)

import { useState } from "react";

export default function NewItem() {
  const initialQuantity = 1;

  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const reset = () => {
    setQuantity(initialQuantity);
  };

  return (
    <div className="text-center bg-gray-200 max-w-sm m-auto rounded-3xl">
      <p className="m-5 text-xl">
        Quantity: <span className="text-3xl"> {quantity}</span>
      </p>
      <div className="flex flex-row gap-3 max-w-sm m-auto">
        {/* TODO: figure out how to nest the "disabled" function in the called function */}
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
      <button
        onClick={reset}
        disabled={quantity == 1 ? true : false}
        className="basis-1/2 rounded-full m-4 p-4  bg-slate-500 hover:bg-slate-700 active:bg-slate-900 text-white disabled:bg-gray-100 disabled:text-white ">
        Reset Quantity to 1
      </button>
    </div>
  );
}
