import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardFavorite from "../components/CardFavorite";
import Container from "react-bootstrap/esm/Container";

const FavoritePage = () => {
  const favMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
  return (
    <>
      <Header />
      <Container>
        <CardFavorite favMeals={favMeals} />
      </Container>
      <Footer />
    </>
  );
};

export default FavoritePage;
