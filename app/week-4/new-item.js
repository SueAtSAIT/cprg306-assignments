"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <p>Quantity: {quantity}</p>
      <button onClick={decrement}>Remove 1</button>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
