import FooterLink from "../components/footer";

import NewItem from "./new-item";

import Heading from "../components/heading";

export default function Page() {
  return (
    <>
      <header>
        <Heading
          title="Build Your List..."
          pageinfo="Use this page to add items to your Shopping List."
        />
      </header>
      <main className="mt-5">
        {/* Render the Component 
        Name Field, quantity, Category Field */}
        <NewItem />
      </main>
      <FooterLink />
    </>
  );
}
