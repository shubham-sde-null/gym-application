import React from "react";
import foodList from "../context/fooddatabase";
import { v4 as uuidv4 } from "uuid";
import "./FoodData.css";
function FoodData() {
  return (
    <div className="foodItemsCont">
      <p>Nutrition</p>
      <div className="foodItems">
        {" "}
        {foodList.map((food, index = uuidv4()) => (
          <div className="foodItem" key={index}>
            <img src={food.img} alt="" />
            <p className="foodName">{food.name}</p>
            <p className="foodNameUtility">Quantity:&nbsp;{food.quantity}</p>
            <p className="foodNameUtility">Calories:&nbsp;{food.calories}</p>
            <p className="foodNameUtility">Protein:&nbsp;{food.protein}</p>
            <p className="foodNameUtility">Fat:&nbsp;{food.fat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodData;
