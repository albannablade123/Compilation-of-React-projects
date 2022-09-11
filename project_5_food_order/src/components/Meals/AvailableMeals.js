import React from "react";
import DUMMY_MEALS from "./DUMMY_MEALS";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => (

    <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description}/>
  ));
  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealList}</ul>

      </Card>
     
    </section>
  );
};

export default AvailableMeals;
