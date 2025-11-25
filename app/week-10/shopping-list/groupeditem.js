export default function GroupedItem({ groupedList }) {
  return (
    <div>
      {Object.entries(groupedList)
        .sort(([catA], [catB]) => catA.localeCompare(catB))
        .map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-100 rounded mx-4 my-4 px-3 py-3 shadow-lg dark:text-gray-300 dark:bg-gray-700">
            <h2 className="text-xl font-bold capitalize ">{category}</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.quantity} {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
