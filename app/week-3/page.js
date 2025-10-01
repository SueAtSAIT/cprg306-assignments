//In page.js, create a functional component named Page that returns a main element
// wrapped around an h1 "Shopping List" header and the ItemList component.
// Use Tailwind classes for styling.

import ItemList from "./item-list";

import FooterLink from "./footer";
import Heading from "../week-4/heading";

export default function Page() {
  return (
    <>
      <header>
        <Heading title="Shopping List" />
      </header>
      <main className="mx-auto max-w-sm items-center">
        <ItemList />
      </main>
      <FooterLink />
    </>
  );
}
