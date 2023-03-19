import React from "react";
import exerciseList from "../context/ExerciseList";

import "./Category.css";

function Category() {
  return (
    <div className="home">
      <p>Workout Categories </p>
      <div className="exerciseCont">
        {exerciseList.map((ex) => (
          <div className="exercise">
            <img src={ex.url} alt={ex.name} />
            <p>{ex.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
