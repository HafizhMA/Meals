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

  return <div>DetailCardMeals</div>;
};

export default DetailCardMeals;
