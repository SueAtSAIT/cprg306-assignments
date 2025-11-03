"use client";

import React, { useState, useEffect } from "react";

export default function GetMealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  console.log(`Passed ingredient is ${ingredient}`);
  useEffect(() => {
    fetchMealIdeas(ingredient);
  });

  const fetchMealIdeas = async () => {
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
  };

  return (
    <div>
      <h2>Meal ideas for {ingredient}</h2>
      {(meals || []).map((meal) => (
        <div key={meal.idMeal}>
          <ul>
            <li key={meal.idMeal}>{meal.strMeal}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
