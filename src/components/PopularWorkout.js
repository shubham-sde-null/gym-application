import React from "react";
import popularExercise from "../context/PopularExercise";
import "./PopularWorkout.css";
import { v4 as uuidv4 } from "uuid";
function PopularWorkout() {
  return (
    <div className="popularWorkout">
      <p>Popular Workouts </p>
      <div className="popularCont">
        {popularExercise.map((ex, index = uuidv4()) => (
          <div key={index} className="popular">
            <img src={ex.url} alt={ex.name} />
            <p>{ex.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularWorkout;
