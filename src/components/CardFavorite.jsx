import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDetailMeals } from "../api/api";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardFavorite = ({ favMeals }) => {
  const [favMealsData, setFavMealsData] = useState([]);

  useEffect(() => {
    async function fetchFavDetailMeals() {
      const mealsData = [];

      for (const mealsId of favMeals) {
        try {
          const data = await getDetailMeals(mealsId);
          mealsData.push(data);
        } catch (error) {
          console.error("error fetching meals detail", error);
        }
      }

      console.log("mealsData:", mealsData); // Check if data is fetched correctly
      setFavMealsData(mealsData);
    }
    fetchFavDetailMeals();
  }, [favMeals]);

  if (!favMeals || favMeals.length === 0) {
    return <div>Tidak ada makanan favorit.</div>;
  }

  return (
    <Row className="d-flex justify-content-center">
      {favMealsData.flat().map((meal) => (
        <Col key={meal.idMeal} lg={4} md={6} sm={12} className="my-3">
          <Card className="rounded-3">
            <Link id="cardLink" to={`/detail/${meal.idMeal}`}>
              <Card.Img variant="top" src={meal.strMealThumb} />
            </Link>
            <Card.Body className="cards text-black text-center">
              <Card.Title>{meal.strMeal}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardFavorite;
