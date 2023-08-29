import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailCardMeals from "../components/DetailCardMeals";

const DetailMealsPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <DetailCardMeals />
      </div>
      <Footer />
    </>
  );
};

export default DetailMealsPage;
