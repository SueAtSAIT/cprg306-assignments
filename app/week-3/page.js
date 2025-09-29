//In page.js, create a functional component named Page that returns a main element
// wrapped around an h1 "Shopping List" header and the ItemList component.
// Use Tailwind classes for styling.

import Link from "next/link";

import ItemList from "./item-list";

import FooterLink from "./footer";

export default function Page() {
  return (
    <>
      <header>
        <h1 className="text-3xl text-center font-semibold my-3">
          Shopping List
        </h1>
      </header>
      <main className="mx-auto max-w-sm items-center">
        <ItemList />
      </main>
      <FooterLink />
    </>
  );
}
