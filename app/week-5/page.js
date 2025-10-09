import Link from "next/link";
import FooterLink from "../week-3/footer";

import NewItem from "./new-item";

import Heading from "./heading";

export default function Page() {
  return (
    <>
      <header>
        <Heading
          title="Build Your List..."
          pageinfo="Use this page to add items to your Shopping List."
        />
      </header>
      <main>
        <NewItem />
      </main>
      <FooterLink />
    </>
  );
}
