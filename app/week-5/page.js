import FooterLink from "../components/footer";

import NewItem from "./new-item";

import Heading from "../components/heading";

export default function Page() {
  return (
    <>
      <header>
        <Heading
          title="Build Your List..."
          pageinfo="Use this form to add items to your Shopping List."
        />
      </header>
      <main className="mt-5">
        <NewItem />
      </main>
      <FooterLink />
    </>
  );
}
