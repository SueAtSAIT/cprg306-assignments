"use client";

// reference for changing to the disabled state:
// https://stackoverflow.com/questions/44896924/how-to-disable-button-based-on-state
// but it feels like a higher-order function could be used for this and reset (TODO)

import { useState } from "react";

export default function NewItem() {
  // using a constant to define each initial value since I couldn't figure out how to set it and later reset it any other way

  const initialQuantity = 1;
  const maxQuantity = 20;
  const [quantity, setQuantity] = useState(initialQuantity);
  // Oct.19: add button control with useState - establish initial state:
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(true);
  const [isResetDisabled, setIsResetDisabled] = useState(true);

  // Conditionally toggle the buttons when quantity changes
  const updateButtonStates = (quantity) => {
    setIsIncrementDisabled(quantity === maxQuantity);
    setIsDecrementDisabled(quantity === initialQuantity);
    setIsResetDisabled(quantity === initialQuantity);
  };
  const increment = () => {
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateButtonStates(newQuantity);
  };
  const decrement = () => {
    let newQuantity = quantity - 1;
    setQuantity(newQuantity);
    updateButtonStates(newQuantity);
  };
  const reset = () => {
    let newQuantity = initialQuantity;
    setQuantity(initialQuantity);
    updateButtonStates(newQuantity);
  };

  const initialName = "";
  const [name, setName] = useState(initialName);
  // Use the setName function in an onChange event handler
  // to update the state of name as the user types into the field.
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const initialCategory = "produce";
  const [category, setCategory] = useState(initialCategory);
  // Use the setCategory function in an onChange event handler
  // to update the state of category as the user selects a different option.
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // TODO:  Create a handleSubmit function. This function should:
  const handleSubmit = (event) => {
    // Prevent the form's default submission behavior.
    event.preventDefault();
    // Create an item object with the current values of name, quantity, and category.
    const item = [{ name }, { quantity }, { category }];
    const shoppingList = [];
    // push the item into the list
    shoppingList.push(item);

    // Log the item object to the console.
    // using spread operator to log each item from the object individually
    console.log(...item);
    // Display an alert with the current state of name, quantity, and category.
    alert(`${name} with quantity ${quantity} (category: ${category}) added!`);

    // Reset the state variables to their initial values.
    // reference: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
    // and https://react.dev/reference/react/useState
    setName(initialName);
    setQuantity(initialQuantity);
    setCategory(initialCategory);
  };
  // Render the form - Name Field, quantity, Category Field
  return (
    <div className="text-center bg-gray-200 max-w-md m-auto p-2 rounded-3xl dark:text-gray-600">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-xl ">
          Item to add:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            className="bg-white mt-3 ml-2 py-3 px-1 max-h-lh outline text-xl"
          />
        </label>
        {/* The name label tag above is around the input element to focus if label clicked, per React doc:
        https://react.dev/reference/react-dom/components/input#providing-a-label-for-an-input */}
        <p className="m-5 text-xl">Quantity: {quantity}</p>
        <div className="flex flex-row gap-3 m-auto">
          {/* TODO: figure out how to nest the "disabled" function in the called function */}
          <button
            type="button"
            onClick={decrement}
            disabled={isDecrementDisabled}
            className="basis-1/2 rounded-full m-4 p-4 border-2 bg-white hover:bg-gray-200 active:bg-gray-500 disabled:bg-gray-100 disabled:text-white disabled:border-0 active:text-white">
            Remove 1
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={isIncrementDisabled}
            className="basis-1/2 rounded-full m-4 p-4  bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-900 hover:text-white disabled:bg-gray-100 disabled:text-white ">
            Add 1 more
          </button>
        </div>
        <p className="italic">Quantity can be from 1 to a max of 20.</p>
        <button
          type="button"
          onClick={reset}
          disabled={isResetDisabled}
          className="basis-1/2 rounded-full m-4 p-4  bg-slate-500 hover:bg-slate-700 active:bg-slate-900 text-white disabled:bg-gray-100 disabled:text-white ">
          Reset Quantity to 1
        </button>
        <div>
          <label htmlFor="category" className="text-xl ">
            Category:
            <select
              id="category"
              name="category"
              value={category}
              onChange={handleCategoryChange}
              className="bg-white my-3 ml-2 py-3 px-1 text-xl ">
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozenFoods">Frozen Foods</option>
              <option value="cannedGoods">Canned Goods</option>
              <option value="dryGoods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="basis-1/2 rounded-full m-4 p-4  bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600 text-white disabled:bg-gray-100 disabled:text-white ">
          Add this Item ✅
        </button>
      </form>
    </div>
  );
}
