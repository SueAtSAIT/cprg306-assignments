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
  const [sortBy, setSortBy] = useState("name");

  const sortByCategory = () => {
    setSortBy("category");
  };

  const sortByName = () => {
    setSortBy("name");
  };
  //   Problems with Current Code:
  // Wrong sort function: You're setting sortBy to a comparison function instead of a string
  // Incorrect comparison: a.name - b.name won't work for strings
  // Missing return statement: The component function ends abruptly
  // Not using sorted list: You're mapping over items instead of sortedList

  const sortedList = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else return 0;
  });
}

return (
  // <div>
  //   {/* sortedList.map((item, index) => ( //{" "}
  //   <Item key={item.id || index} {...item} />}
  //   <Item
  //     key={item.id || index}
  //     name={item.name}
  //     quantity={item.quantity}
  //     category={item.category}
  //   />
  //   ) } return ( // Added missing return statement */}
  <div>
    <h2>Sort by:</h2>
    <button onClick={sortByName}>Name</button>
    <button onClick={sortByCategory}>Category</button>

    {sortedList.map((item, index) => (
      <Item
        key={item.id || index}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
      />
      // <Item key={item.id || index} {...item} />
    ))}
  </div>
);
