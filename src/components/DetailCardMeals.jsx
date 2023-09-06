import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { getDetailMeals } from "../api/api";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const DetailCardMeals = () => {
  const { idMeal } = useParams();
  const [detailMealsData, setDetailMealsData] = useState(null);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

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

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled); // Toggle the state
  };

  if (!detailMealsData) {
    return (
      <div className="text-center my-3">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      <section id="detailMealsCard" className="min-vh-100 my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {detailMealsData.map((meal) => (
              <div className="col" key={meal.idMeal}>
                <Card id="card">
                  <Card.Img variant="top" src={meal.strMealThumb} />
                  <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <div className="d-flex flex-wrap justify-content-center">
                      <Card.Text>Category: {meal.strCategory}</Card.Text>
                      <Card.Text className="mx-4">
                        Area: {meal.strArea}
                      </Card.Text>
                      <Card.Text>Tags: {meal.strTags}</Card.Text>
                    </div>
                    <Card.Text>{meal.strInstructions}</Card.Text>
                    <div id="strYoutube" className="video-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${
                          meal.strYoutube.split("=")[1]
                        }`}
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="d-flex flex-row-reverse">
        {isHeartFilled ? (
          <AiFillHeart
            id="heartFill"
            className="heartFillPosition"
            size={50}
            onClick={handleHeartClick}
          />
        ) : (
          <AiOutlineHeart
            id="heart"
            className="heartPosition"
            size={50}
            onClick={handleHeartClick}
          />
        )}
      </div>
    </>
  );
};

export default DetailCardMeals;
