import React from "react";
import exerciseList from "../context/ExerciseList";
import { v4 as uuidv4 } from "uuid";
import "./Category.css";

function Category() {
  return (
    <div className="home">
      <p>Workout Categories </p>
      <div className="exerciseCont">
        {exerciseList.map((ex, index = uuidv4()) => (
          <div key={index} className="exercise">
            <img src={ex.url} alt={ex.name} />
            <p>{ex.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
