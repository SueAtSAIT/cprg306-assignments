// Code blatantly copied from M365 Copilot so I can try to understand how to unpack an array of arrays...

export default function GroupedItem({ groupedList }) {
  return (
    <div>
      {/* Object.entries returns an array which is then iterated by map to pull out each category then it's items. 
      Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */}
      {Object.entries(groupedList).map(([category, items]) => (
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
