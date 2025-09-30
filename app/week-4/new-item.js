"use client";

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
      <button onClick={decrement}>Remove 1</button>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
