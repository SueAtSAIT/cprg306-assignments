import Link from "next/link";
import FooterLink from "../week-3/footer";

import NewItem from "./new-item";

export default function Page() {
  return (
    <>
      <header>
        <h1>Build Your List...</h1>
        <p>Use this page to add items to your Shopping List.</p>
      </header>
      <main>
        <NewItem />
      </main>
      <FooterLink />
    </>
  );
}
