// In item.js, create a functional component named Item.
// This component should accept name, quantity, and category as props
// and display them in a list item element. Use Tailwind classes for styling.

export default function Item(props) {
  return (
    <section>
      <div>
        {/* TODO: format this nicely once working */}
        <ul className="bg-gray-100 rounded mx-4 my-4 px-3 py-3">
          <li>Item Name: {props.name}</li>
          <li>Quantity: {props.quantity}</li>
          <li>Category: {props.category}</li>
        </ul>
      </div>
    </section>
  );
}
