// In item.js, create a functional component named Item.
// This component should accept name, quantity, and category as props
// and display them in a list item element. Use Tailwind classes for styling.

export default function Item({ name, quantity, category }) {
  function handleCardClick() {
    let ingredient = "";
    let ingName = name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    if (ingName.search(/,/) > 0) {
      console.log("found a comma to be removed");
      let commaPosition = ingName.search(/,/);
      console.log(commaPosition);
      let trimmedIng = ingName.trim();
      ingredient = trimmedIng.slice(0, commaPosition).replace(/ /g, "_");
    } else {
      let trimmedIng = ingName.trim();
      ingredient = trimmedIng.replace(/ /g, "_");
    }

    console.log(ingredient);
  }

  return (
    <section>
      <div onClick={handleCardClick}>
        <ul className="bg-gray-100 rounded mx-4 my-4 px-3 py-3 shadow-lg dark:text-gray-300 dark:bg-gray-700">
          <li className="text-xl font-bold capitalize ">{name}</li>
          <li>Quantity: {quantity}</li>
          <li className="capitalize ">Category: {category}</li>
        </ul>
      </div>
    </section>
  );
}
