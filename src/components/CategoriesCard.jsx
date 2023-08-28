import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { getCategoriesMeals } from "../api/api";

const CategoriesCard = () => {
  const { strCategory } = useParams();
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const mealsData = await getCategoriesMeals(strCategory);
        console.log(mealsData);
        setCategoryData(mealsData);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchCategories();
  }, [strCategory]);

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-center my-3">
        <h2>{strCategory} Category</h2>
      </div>
      <div className="row">
        {categoryData.map((meal) => (
          <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={meal.idMeal}>
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
  );
};

export default CategoriesCard;
