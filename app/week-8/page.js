//In page.js, create a functional component named Page that returns a main element
// wrapped around an h1 "Shopping List" header and the ItemList component.
// Use Tailwind classes for styling.
"use client";

import { useState, useEffect } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import FooterLink from "../components/footer";
import Heading from "../components/heading";
import GetMealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((previousItems) => [...previousItems, newItem]);
  };

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (name) => {
    // clean up the name of the ingredient to be passed to the API call
    console.log("Type of name:", typeof name, "Value of name:", name);

    if (typeof name !== "string") {
      console.warn("handleItemSelect received non-string:", name);
      return;
    }

    let ingName = name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    console.log(
      "Type of ingName:",
      typeof ingName,
      "Value of ingName:",
      ingName
    );
    // trim and trim again since I can't figure out why Dish Soap has a trailing underscore after processing
    const ingredient = ingName.includes(",")
      ? ingName.slice(0, ingName.indexOf(",")).trim().replace(/ /g, "_")
      : ingName.trim().replace(/ /g, "_");

    console.log(`ingredient: ${ingredient}`);
    setSelectedItemName(ingredient);
  };

  useEffect(() => {
    console.log("selectedItemName changed:", selectedItemName);
  }, [selectedItemName]);

  return (
    <>
      <header>
        <Heading title="Shopping List" />
      </header>
      <main className="mx-auto max-w-fit items-center">
        <NewItem onAddItem={handleAddItem} />
        <div className="flex">
          <ItemList items={items} onItemSelect={handleItemSelect} />
          <GetMealIdeas ingredient={selectedItemName} />
        </div>
      </main>
      <FooterLink />
    </>
  );
}
