import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameRPC from "./pages/rock-papper-sc";
import TodoList from "./pages/todo-list";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница с карточками */}
        <Route path="/" element={<Home />} />

        {/* Страница игры "Камень-ножницы-бумага" */}
        <Route path="/game" element={<GameRPC />} />

        {/* Страница с ToDo листом */}
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
