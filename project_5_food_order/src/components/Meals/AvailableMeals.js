import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";

const AvailableMeals = (props) => {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(undefined);

  const getAllMeals = async(limit, offset) => {
    axios
      .get("http://localhost:8000/read?limit=10&offset=1")
      .then((response) => {
        if (response.data[0] === undefined) {
          throw new Error("something went wrong");
        }
        const mealResult = response.data;
        setMeals(mealResult);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error);
    });
    
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsisLoading}>
        <p>Loading.....</p>
      </section>
    );
  }

  if(httpError !== undefined){
    return (
      <section className={classes.MealsisError}>
        <p>Uh oh, something went wrong: {httpError}</p>
      </section>
    );
  }

  const mealList = Meals?.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.title}
      price={meal.price}
      description={meal.description}
    />
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
