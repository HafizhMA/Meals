import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { getCategoriesMeals } from "../api/api";

const CategoriesCard = () => {
  const { strCategory } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [searchCategory, setSearchCategory] = useState("");

  async function fetchCategories() {
    try {
      const mealsData = await getCategoriesMeals(strCategory);
      console.log(mealsData);
      setCategoryData(mealsData);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, [strCategory]);

  const filteredCategory = searchCategory
    ? categoryData.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchCategory.toLowerCase())
      )
    : categoryData;

  if (!categoryData) {
    return (
      <div className="text-center">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center my-3">
        <h2>{strCategory} Category</h2>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari kategori menu..."
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredCategory.length === 0 ? (
          <p className="my-3">tidak ditemukan</p>
        ) : (
          filteredCategory.map((meal) => (
            <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={meal.idMeal}>
              <Card id="card">
                <Link id="cardLink" to={`/detail/${meal.idMeal}`}>
                  <Card.Img variant="top" src={meal.strMealThumb} />
                </Link>
                <Card.Body className="text-center">
                  <Card.Title>{meal.strMeal}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoriesCard;
