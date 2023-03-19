import React from "react";
import WorkoutPrograms from "../context/WorkoutProgram";
import "./WorkoutProgramsName.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
function WorkoutProgramsName() {
  return (
    <div className="workoutProgramsNameCont">
      {WorkoutPrograms.map((work, index = uuidv4()) => (
        <div
          key={index}
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
