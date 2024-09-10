import React from "react";
import "../todo-list/styles/Tode.css";

function TodoList() {
  const [todoList, setTodoList] = React.useState([]);

  function addTodo() {
    const inputDeal = document.querySelector(".js-input");
    const inputData = document.querySelector(".js-data-input");

    const newTodo = {
      deal: inputDeal.value,
      data: inputData.value,
    };

    // Обновляем состояние корректно через копию массива
    setTodoList([...todoList, newTodo]);

    // Очищаем поля ввода
    inputDeal.value = "";
    inputData.value = "";
  }

  function removeTodo(index) {
    // Удаляем элемент по индексу и обновляем состояние
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  }

  return (
    <div className="root">
      <div className="topic">
        <input className="js-input deal-input" placeholder="Todo list" />
        <input type="date" className="js-data-input data-input" />

        <button onClick={addTodo} className="button-add">
          Add
        </button>
      </div>

      <div className="js-add-deals todo-list">
        {todoList.map((todo, index) => (
          <div key={index} className="todo-item">
            <div>{todo.deal}</div>
            <div>{todo.data}</div>
            <button onClick={() => removeTodo(index)} className="delet-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
