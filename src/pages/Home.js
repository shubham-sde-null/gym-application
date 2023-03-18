import React from "react";
import Category from "../components/Category";
import PopularWorkout from "../components/PopularWorkout";
import WorkoutPrograms from "../components/WorkoutPrograms";
function Home() {
  return (
    <div className="homeComponent">
      <Category />
      <PopularWorkout />
      <WorkoutPrograms />
    </div>
  );
}

export default Home;
