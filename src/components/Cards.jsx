import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getListMeals } from "../api/api";
import { Link } from "react-router-dom";

const Cards = () => {
  const [categories, setCategories] = useState([]);
  const [searchMeals, setSearchMeals] = useState("");

  async function fetchData() {
    const mealsData = await getListMeals();
    setCategories(mealsData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function MealsCard({ categorie }) {
    return (
      <Card id="card">
        <Link id="cardLink" to={`/categories/${categorie.strCategory}`}>
          <Card.Img variant="top" src={categorie.strCategoryThumb} />
        </Link>
        <Card.Body className="text-center">
          <Card.Title>{categorie.strCategory}</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  const filteredMeals = searchMeals
    ? categories.filter((categorie) =>
        categorie.strCategory.toLowerCase().includes(searchMeals.toLowerCase())
      )
    : categories;

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari nama kategori makanan..."
          value={searchMeals}
          onChange={(e) => setSearchMeals(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredMeals.length === 0 ? (
          <p className="my-3">tidak ditemukan</p>
        ) : (
          filteredMeals.map((categorie) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 my-3"
              key={categorie.idCategory}
            >
              <MealsCard categorie={categorie} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
