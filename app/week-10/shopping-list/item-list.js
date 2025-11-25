"use client";

import { useState } from "react";
import Item from "./item";
import GroupedItem from "./groupeditem";

export default function ItemList({ items = [], onItemSelect }) {
  const [view, setView] = useState("name");
  const sortByCategory = () => setView("category");
  const sortByName = () => setView("name");
  const groupByCategory = () => setView("group");

  const sortedList =
    view === "group"
      ? []
      : [...items].sort((a, b) => a[view].localeCompare(b[view]));

  const groupedList = items.reduce((groupedItems, item) => {
    const category = item.category;
    if (!groupedItems[category]) {
      groupedItems[category] = [];
    }
    groupedItems[category].push(item);
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
    return groupedItems;
  }, {});

  return (
    <div>
      <h2 className="text-xl text-center">Sort by:</h2>
      <div className="flex justify-center">
        <button
          onClick={sortByName}
          className={`${
            view === "name"
              ? "bg-violet-600 text-white"
              : "bg-white border border-gray-600 text-gray-600"
          }
            " my-6 mx-2 p-3 rounded-2xl  hover:bg-violet-400 hover:text-white active:bg-violet-900 `}>
          Name
        </button>

        <button
          onClick={sortByCategory}
          className={`${
            view === "category"
              ? "bg-violet-600 text-white"
              : "bg-white border border-gray-600 text-gray-600"
          } my-6 mx-2 p-3 rounded-2xl  hover:bg-violet-400 hover:text-white active:bg-violet-900 `}>
          Category
        </button>

        <button
          onClick={groupByCategory}
          className={`${
            view === "group"
              ? "bg-violet-600 text-white"
              : "bg-white border border-gray-600 text-gray-600"
          } my-6 mx-2 p-3 rounded-2xl  hover:bg-violet-400 hover:text-white active:bg-violet-900 `}>
          Group by Category
        </button>
      </div>
      <div className={`${view === "group" ? "hidden" : ""}`}>
        <p className="ml-4">
          Click any <span className="italic">edible</span> item to search meal
          ideas...
        </p>
        {sortedList.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </div>
      <div className={`${view === "group" ? "" : "hidden"}`}>
        <GroupedItem groupedList={groupedList} />
      </div>
    </div>
  );
}
