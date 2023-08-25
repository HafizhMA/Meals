import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jumbotronImg from "../assets/jumbotronimg.png";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Header />
      <section id="jumbotron">
        <div className="container d-flex flex-wrap align-items-center justify-content-center">
          <div className="textjumbotron">
            <h2>choose the food you want</h2>
          </div>
          <div className="imgjumbotron">
            <img src={jumbotronImg} alt="" />
          </div>
        </div>
      </section>
      <section id="mealsCard">
        <div className="container">
          <Cards />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
