export default function GroupedItem({ name, quantity, category }) {
  return (
    <section>
      <h2 className="capitalize ">Category: {category}</h2>
      <div>
        <ul className="bg-gray-100 rounded mx-4 my-4 px-3 py-3 shadow-lg">
          <li className="text-xl font-bold capitalize ">
            {quantity} of {name}
          </li>
        </ul>
      </div>
    </section>
  );
}
