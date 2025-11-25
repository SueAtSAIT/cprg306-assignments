"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const initialQuantity = 1;
  const maxQuantity = 20;
  const initialName = "";
  const initialCategory = "produce";
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(true);
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  const [name, setName] = useState(initialName);
  const [category, setCategory] = useState(initialCategory);

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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let randomID = Math.random().toString(36).slice(2);
    onAddItem({
      id: randomID,
      name: name,
      quantity: quantity,
      category: category,
    });

    setName(initialName);
    setQuantity(initialQuantity);
    setCategory(initialCategory);
  };

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
        <p className="m-5 text-xl">Quantity: {quantity}</p>
        <div className="flex flex-row gap-3 m-auto">
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
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="basis-1/2 rounded-full m-4 p-4  bg-violet-400 hover:bg-violet-500 active:bg-violet-600 text-white disabled:bg-gray-100 disabled:text-white ">
          Add this Item ✅
        </button>
      </form>
    </div>
  );
}
