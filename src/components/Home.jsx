import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Выберите действие</h1>

      <div className="card-container">
        <Link to="/game" className="card">
          <div className="card-content">
            <h2>Камень-ножницы-бумага</h2>
            <p>Нажмите, чтобы поиграть</p>
          </div>
        </Link>

        <Link to="/todo" className="card">
          <div className="card-content">
            <h2>Список дел</h2>
            <p>Нажмите, чтобы увидеть список</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
