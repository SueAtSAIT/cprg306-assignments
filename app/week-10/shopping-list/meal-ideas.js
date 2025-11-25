"use client";

import { useState, useEffect } from "react";

export default function GetMealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        throw new Error(
          `HTTP error, couldn't fetch data. Status: ${response.status}`
        );
      }
      const data = await response.json();
      console.log(`API response for ${ingredient}`, data);

      if (data) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (e) {
      console.log(e.message);
      setMeals([]);
    }
  }

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  if (ingredient) {
    let mainIngredient = ingredient.replace(/_/g, " ");
    return (
      <div className="mt-35">
        <h2 className="text-xl font-bold capitalize">
          Meal ideas for {mainIngredient}
        </h2>
        {(meals || []).map((meal) => (
          <div key={meal.idMeal}>
            <ul className="mt-4 space-y-3">
              <li
                key={meal.idMeal}
                className="flex box-border h-14 w-75 items-center gap-3">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-12 h-12 object-cover rounded"
                />
                <span className="text-base font-medium capitalize">
                  {meal.strMeal}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
