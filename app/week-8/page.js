//In page.js, create a functional component named Page that returns a main element
// wrapped around an h1 "Shopping List" header and the ItemList component.
// Use Tailwind classes for styling.
"use client";

import { useState } from "react";

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

  const [selectedItemName, setSelectedItemName] = useState();

  let ingredient;

  const handleItemSelect = (name) => {
    // clean up the name of the ingredient to be passed to the API call
    console.log("Type of name:", typeof name, "Value of name:", name);

    let ingName = String(name || "")
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    // trim and trim again since I can't figure out why Dish Soap has a trailing underscore after processing
    if (ingName.search(/,/) > 0) {
      let commaPosition = ingName.search(/,/);
      console.log(commaPosition);
      let trimmedIng = ingName.trim();
      ingredient = trimmedIng.slice(0, commaPosition).replace(/ /g, "_");
    } else {
      let trimmedIng = ingName.trim();
      ingredient = trimmedIng.replace(/ /g, "_");
    }

    console.log(ingredient);
    setSelectedItemName(ingredient);
    console.log(selectedItemName);
  };

  return (
    <>
      <header>
        <Heading title="Shopping List" />
      </header>
      <main className="mx-auto max-w-sm items-center">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect(name)} />
        <GetMealIdeas ingredient={selectedItemName} />
      </main>
      <FooterLink />
    </>
  );
}
