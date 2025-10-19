//Remove all item variables (const item1 etc.) from the ItemList component.

// Import the useState hook from React, the Item component, and the items from the JSON file.

"use client";

import { useState } from "react";

import Item from "./item";

import items from "./items.json";
import GroupedItem from "./groupeditem";

// Use the useState hook to create a state variable sortBy and its setter function setSortBy.
// This will be used to determine the sorting preference of the user.
// Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.

export default function ItemList() {
  // set the sorting option
  const [sortBy, setSortBy] = useState("name");

  // set the initial display state for the sorting buttons
  const [isNameActive, setIsNameActive] = useState(true);
  const [isGroupbyActive, setIsGroupbyActive] = useState(false);

  // handle the Category button being clicked by setting the sortBy value to category
  // and toggle the name button state to false to make the name button inactive and category button active:
  const sortByCategory = () => {
    setSortBy("category");
    setIsNameActive(false);
    setIsGroupbyActive(false);
  };
  // handle the Name button being clicked by setting the sortBy value to name
  // and toggle the name button state to true to make the name button active and category button inactive:
  const sortByName = () => {
    setSortBy("name");
    setIsNameActive(true);
    setIsGroupbyActive(false);
  };

  const groupByCategory = () => {
    setIsGroupbyActive(true);
  };

  // sort a copy of the list based on the active sortBy value, use this for the mapped display items in the element
  const sortedList = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else return 0;
  });

  // *Optional* group the list by category
  // Figured this out watching the linked explainer video https://youtu.be/s1XVfm5mIuU?si=j53R6HmPa1jVxgpY
  // Could not figure out how to unpack it again in a new element though - see comments in groupeditem.js

  const groupedList = items.reduce((groupedItems, item) => {
    const category = item.category;
    if (groupedItems[category] == null) groupedItems[category] = [];
    groupedItems[category].push(item);
    return groupedItems;
  }, {});
  console.log(items);
  console.log(groupedList);

  return (
    <div>
      <h2 className="text-xl text-center">Sort by:</h2>
      <div className="flex justify-center">
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
        <button
          onClick={groupByCategory}
          className={`${
            isNameActive
              ? "bg-white border border-gray-600 text-gray-300"
              : "bg-blue-600 text-white"
          } m-6 p-3 rounded-2xl  hover:bg-blue-400 hover:text-white active:bg-blue-900 `}>
          Group by Category
        </button>
      </div>
      <div className={`${isGroupbyActive ? "hidden" : ""}`}>
        {sortedList.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      <div className={`${isGroupbyActive ? "" : "hidden"}`}>
        <GroupedItem groupedList={groupedList} />
      </div>
    </div>
  );
}
