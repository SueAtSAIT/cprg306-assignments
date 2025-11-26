import { deleteItem } from "../_services/shopping-list-service";

export default function Item({ id, name, quantity, category, onSelect }) {
  return (
    <section>
      <div
        onClick={() => {
          if (category != "household") {
            onSelect?.(name);
          }
        }}>
        <ul className="bg-gray-100 rounded mx-4 my-4 px-3 py-3 shadow-lg dark:text-gray-300 dark:bg-gray-700">
          <li className="text-xl font-bold capitalize ">{name}</li>
          <li>Quantity: {quantity}</li>
          <li className="capitalize ">Category: {category}</li>
          {/* <button onClick={() => deleteItem(user.uid, id)}>Delete</button> */}
        </ul>
      </div>
    </section>
  );
}
