"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import FooterLink from "@/app/components/footer";
import Heading from "@/app/components/heading";
import { useUserAuth } from "@/app/contexts/AuthContext";

import GetMealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";

import {
  addItem,
  getItems,
  updateItem,
  deleteItem,
} from "@/app/components/crud";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((previousItems) => [...previousItems, newItem]);
  };

  const handleItemSelect = (name) => {
    let ingName = name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    const ingredient = ingName.includes(",")
      ? ingName.slice(0, ingName.indexOf(",")).trim().replace(/ /g, "_")
      : ingName.trim().replace(/ /g, "_");

    setSelectedItemName(ingredient);
  };

  useEffect(() => {}, [selectedItemName]);

  if (user === null)
    return (
      <Link href="./." className="text-2xl font-bold m-4 p-4">
        Click here to login...
      </Link>
    );
  if (user)
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
