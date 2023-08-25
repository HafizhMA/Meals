import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section id="jumbotron">
        <div className="container d-flex flex-wrap">
          <div className="textjumbotron">
            <h2>choose the food you want</h2>
          </div>
          <div className="imgjumbotron"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
