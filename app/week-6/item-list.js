//Remove all item variables (const item1 etc.) from the ItemList component.

// Import the useState hook from React, the Item component, and the items from the JSON file.

"use client";

import { useState } from "react";

import Item from "./item";

import items from "./items.json";

// Use the useState hook to create a state variable sortBy and its setter function setSortBy.
// This will be used to determine the sorting preference of the user.
// Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.

export default function ItemList() {
  // set the sorting option
  const [sortBy, setSortBy] = useState("name");

  // set the display state for the sorting buttons
  const [isNameActive, setIsNameActive] = useState(true);

  // handle the Category button being clicked by setting the sortBy value to category
  // and toggle the name button state to false to make the name button inactive and category button active:
  const sortByCategory = () => {
    setSortBy("category");
    setIsNameActive(false);
  };
  // handle the Name button being clicked by setting the sortBy value to name
  // and toggle the name button state to true to make the name button active and category button inactive:
  const sortByName = () => {
    setSortBy("name");
    setIsNameActive(true);
  };

  // sort a copy of the list based on the active sortBy value, use this for the mapped display items in the element
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
          <button
            onClick={sortByName}
            className={`${
              isNameActive
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-600 text-gray-300"
            }
            " m-6 p-3 rounded-2xl  hover:bg-blue-400 hover:text-white active:bg-blue-900 `}>
            Name
          </button>
          <button
            onClick={sortByCategory}
            className={`${
              isNameActive
                ? "bg-white border border-gray-600 text-gray-300"
                : "bg-blue-600 text-white"
            } m-6 p-3 rounded-2xl  hover:bg-blue-400 hover:text-white active:bg-blue-900 `}>
            Category
          </button>
        </div>
      </div>
      {sortedList.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
