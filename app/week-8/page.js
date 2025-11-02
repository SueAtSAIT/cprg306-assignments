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

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((previousItems) => [...previousItems, newItem]);
  };

  return (
    <>
      <header>
        <Heading title="Shopping List" />
      </header>
      <main className="mx-auto max-w-sm items-center">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </main>
      <FooterLink />
    </>
  );
}
