import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { getDetailMeals } from "../api/api";

const DetailCardMeals = () => {
  const { idMeal } = useParams();
  const [detailMealsData, setDetailMealsData] = useState(null);

  useEffect(() => {
    async function fetchDetailMeals() {
      try {
        const detailMeals = await getDetailMeals(idMeal);
        console.log(detailMeals);
        setDetailMealsData(detailMeals);
      } catch (error) {
        console.log("error fetching", error);
      }
    }
    fetchDetailMeals();
  }, [idMeal]);

  if (!detailMealsData) {
    return (
      <div className="text-center my-3">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <section id="detailMealsCard" className="min-vh-100 my-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {detailMealsData.map((meal) => (
            <div className="col" key={meal.idMeal}>
              <Card id="card">
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body className="text-center">
                  <Card.Title>{meal.strMeal}</Card.Title>
                  <Card.Text>{meal.strInstructions}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailCardMeals;
