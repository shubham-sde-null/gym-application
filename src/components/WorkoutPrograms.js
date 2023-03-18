import React from "react";
import popularExercise from "../context/PopularExercise";
import workoutCategories from "../context/workoutCategories";
import "./WorkoutPrograms.css";
function WorkoutPrograms() {
  return (
    <div className="workoutProgram">
      <p>Workout Programs </p>
      <div className="workoutCategories">
        {workoutCategories.map((work) => (
          <p className="workoutName">{work.name}</p>
        ))}
      </div>
      <div className="workoutCont">
        {popularExercise.map((ex) => (
          <div className="workout">
            <img src={ex.url} alt={ex.name} />
            <p>{ex.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPrograms;
