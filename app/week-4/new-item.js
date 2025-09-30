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
    <div>
      <p>Quantity: {quantity}</p>
      <div className="flex flex-row gap-3">
        <button
          onClick={decrement}
          disabled={quantity == 1 ? true : false}
          Classname="disabled:bg-gray-400">
          Remove 1
        </button>
        <button onClick={increment} disabled={quantity == 20 ? true : false}>
          Add 1
        </button>
      </div>
      <p>Quantity can be from 1 to a max of 20.</p>
    </div>
  );
}
