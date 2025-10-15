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

  const sortedList = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else return 0;
  });

  return (
    <div>
      <h2 className="text-xl text-center">Sort by:</h2>
      <div className="flex ">
        <div className="inline-flex justify-evenly">
          {/* TODO: conditional rendering of button bg colour based on state ... HELP! */}
          <button
            onClick={sortByName}
            className="bg-blue-500 m-6 p-3 rounded-2xl text-white hover:bg-blue-700 active:bg-blue-900">
            Name
          </button>
          <button
            onClick={sortByCategory}
            className="bg-blue-500 m-6 p-3 rounded-2xl text-white hover:bg-blue-700 active:bg-blue-900">
            Category
          </button>
        </div>
      </div>

      {sortedList.map((item, index) => (
        // <Item
        //   key={item.id || index}
        //   name={item.name}
        //   quantity={item.quantity}
        //   category={item.category}
        // />
        <Item key={item.id || index} {...item} />
      ))}
    </div>
  );
}
