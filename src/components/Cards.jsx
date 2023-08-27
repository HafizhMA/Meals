import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getListMeals } from "../api/api";
import { Link } from "react-router-dom";

const Cards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const mealsData = await getListMeals();
      setCategories(mealsData);
    }
    fetchData();
  }, []);

  function MealsCard({ categorie }) {
    return (
      <Card>
        <Card.Img variant="top" src={categorie.strCategoryThumb} />
        <Card.Body className="text-center">
          <Link
            className="cardLink"
            to={`/categories/${categorie.strCategory}`}
          >
            <Card.Title>{categorie.strCategory}</Card.Title>
          </Link>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div>
      <div className="row">
        {categories.map((categorie) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 my-3"
            key={categorie.idCategory}
          >
            <MealsCard categorie={categorie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
