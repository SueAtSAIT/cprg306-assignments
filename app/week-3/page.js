//In page.js, create a functional component named Page that returns a main element
// wrapped around an h1 "Shopping List" header and the ItemList component.
// Use Tailwind classes for styling.

import Link from "next/link";
import Item from "./item";
import ItemList from "./item-list";
import GroceryList from "./shopping-list";

export default function Page() {
  return (
    <>
      <main>
        <header>
          <h1>Shopping List</h1>
        </header>
        <ItemList />
      </main>
      <footer>
        <Link href="../.">Back to home page...</Link>
      </footer>
    </>
  );
}
