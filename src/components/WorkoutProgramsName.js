import React from "react";
import WorkoutPrograms from "../context/WorkoutProgram";
import "./WorkoutProgramsName.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
function WorkoutProgramsName() {
  return (
    <div className="workoutProgramsNameCont">
      {WorkoutPrograms.map((work) => (
        <div
          style={{ backgroundImage: `url(${work.url})` }}
          className="workoutProgramsName"
        >
          <p>{work.name}</p>
          <p>
            Start Workout <AiOutlineDoubleRight />
          </p>
        </div>
      ))}
    </div>
  );
}
export default WorkoutProgramsName;
