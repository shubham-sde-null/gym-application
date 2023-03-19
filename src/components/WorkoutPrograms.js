import React from "react";
import workoutCategories from "../context/workoutCategories";
import "./WorkoutPrograms.css";
import { useState } from "react";
import WorkoutProgramsName from "./WorkoutProgramsName";
function WorkoutPrograms() {
  const [categoryActive, setCategoryAvtive] = useState("All");

  return (
    <div className="workoutProgram">
      <p>Workout Programs </p>
      <div className="workoutCategories">
        {workoutCategories.map((work) => (
          <p
            onClick={() => {
              setCategoryAvtive(`${work.name}`);
            }}
            className={"workoutName"}
            id={categoryActive === work.name ? "workActive" : ""}
          >
            {work.name}
          </p>
        ))}
      </div>
      <WorkoutProgramsName />
    </div>
  );
}

export default WorkoutPrograms;
