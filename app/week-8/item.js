// In item.js, create a functional component named Item.
// This component should accept name, quantity, and category as props
// and display them in a list item element. Use Tailwind classes for styling.

// week-8 makes the card clickable, passing the name of the item for cleanup, to be used in the API call

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <section>
      <div onClick={() => onSelect?.(name)}>
        <ul className="bg-gray-100 rounded mx-4 my-4 px-3 py-3 shadow-lg dark:text-gray-300 dark:bg-gray-700">
          <li className="text-xl font-bold capitalize ">{name}</li>
          <li>Quantity: {quantity}</li>
          <li className="capitalize ">Category: {category}</li>
        </ul>
      </div>
    </section>
  );
}
