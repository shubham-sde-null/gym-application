import React from "react";
import popularExercise from "../context/PopularExercise";
import "./PopularWorkout.css";
function PopularWorkout() {
  return (
    <div className="popularWorkout">
      <p>Popular Workouts </p>
      <div className="popularCont">
        {popularExercise.map((ex) => (
          <div className="popular">
            <img src={ex.url} alt={ex.name} />
            <p>{ex.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularWorkout;
