"use client";

export const dynamic = "force-dynamic"; //prevent server-side rendering so Vercel might deploy this version

import { useState, useEffect } from "react";
import Link from "next/link";

import FooterLink from "@/app/components/footer";
import Heading from "@/app/components/heading";
import { useUserAuth } from "@/app/contexts/AuthContext";

import GetMealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";

import { addItem, getItems } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (newItem) => {
    try {
      const newItemID = await addItem(user.uid, newItem);
      const itemWithID = { ...newItem, id: newItemID };
      setItems((previousItems) => [...previousItems, itemWithID]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
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

  useEffect(() => {
    if (!user?.uid) return;
    async function loadItems() {
      const response = await getItems(user.uid);

      if (response) {
        setItems(response);
      } else {
        setItems([]);
      }
    }
    if (user) {
      loadItems();
    }
  }, [user.uid]);

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
