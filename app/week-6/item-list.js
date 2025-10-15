//Remove all item variables (const item1 etc.) from the ItemList component.

// Import the useState hook from React, the Item component, and the items from the JSON file.

"use client";

import Item from "./item";

import { useState } from "react";

import items from "./items.json";

// Use the useState hook to create a state variable sortBy and its setter function setSortBy.
// This will be used to determine the sorting preference of the user.
// Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.

export default function ItemList() {
  return (
    <div>
      {
        items.map((item, index) => (
          // <Item key={item.id || index} {...item[index]} />

          <Item
            key={item.id || index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))

        /* <Item
        name={item1.name}
        quantity={item1.quantity}
        category={item1.category}
      />

      <Item {...item12} /> */
      }
    </div>
  );
}
