import React from "react";
import Category from "../components/Category";
import PopularWorkout from "../components/PopularWorkout";
import WorkoutPrograms from "../components/WorkoutPrograms";
import FoodData from "../components/FoodData";
// import "./Home.css";
function Home() {
  return (
    <div className="homeComponent">
      <Category />
      <PopularWorkout />
      <FoodData />
      <WorkoutPrograms />
    </div>
  );
}

export default Home;
