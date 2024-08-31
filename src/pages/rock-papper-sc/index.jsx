import React from "react";
import paper from "../../assets/img/paper-emoji.png";
import rock from "../../assets/img/rock-emoji.png";
import scissors from "../../assets/img/scissors-emoji.png";
import "./styles/buttons.css";
import "./styles/main-style.css";

function GameRPC() {
  const [sourse, setSourse] = React.useState(
    JSON.parse(localStorage.getItem("score")) || { win: 0, lose: 0, draw: 0 }
  );
  const [result, setResult] = React.useState("");
  const [computerMove, setComputerMove] = React.useState(rock);
  const [myMove, setMyMove] = React.useState(rock);

  React.useEffect(() => {
    // Обновляем счёт в DOM при изменении `sourse`
    document.querySelector(
      ".js-score"
    ).innerHTML = `Побед: ${sourse.win} Поражений: ${sourse.lose} Ничьих: ${sourse.draw}`;
  }, [sourse]);

  function convert(res) {
    if (res === "камень") return rock;
    if (res === "бумагу") return paper;
    return scissors;
  }

  const rollComputer = () => {
    const roll = Math.random();
    if (roll < 1 / 3) return "камень";
    if (roll < 2 / 3) return "бумагу";
    return "ножницы";
  };

  function mainGame(param) {
    const computerChois = rollComputer();

    // Логика игры
    if (param === "камень") {
      if (computerChois === "камень") {
        setResult("Ничья");
        setSourse((prev) => ({ ...prev, draw: prev.draw + 1 }));
      } else if (computerChois === "бумагу") {
        setResult("Ты проиграл");
        setSourse((prev) => ({ ...prev, lose: prev.lose + 1 }));
      } else {
        setResult("Ты выиграл");
        setSourse((prev) => ({ ...prev, win: prev.win + 1 }));
      }
    } else if (param === "бумагу") {
      if (computerChois === "камень") {
        setResult("Ты выиграл");
        setSourse((prev) => ({ ...prev, win: prev.win + 1 }));
      } else if (computerChois === "бумагу") {
        setResult("Ничья");
        setSourse((prev) => ({ ...prev, draw: prev.draw + 1 }));
      } else {
        setResult("Ты проиграл");
        setSourse((prev) => ({ ...prev, lose: prev.lose + 1 }));
      }
    } else {
      if (computerChois === "камень") {
        setResult("Ты проиграл");
        setSourse((prev) => ({ ...prev, lose: prev.lose + 1 }));
      } else if (computerChois === "бумагу") {
        setResult("Ты выиграл");
        setSourse((prev) => ({ ...prev, win: prev.win + 1 }));
      } else {
        setResult("Ничья");
        setSourse((prev) => ({ ...prev, draw: prev.draw + 1 }));
      }
    }

    // Сохранение счёта в localStorage
    localStorage.setItem("score", JSON.stringify(sourse));

    // Обновление результата и ходов
    setComputerMove(convert(computerChois));
    setMyMove(convert(param));
  }

  return (
    <div className="root">
      <div className="titel-root">
        <p className="title">Камень Ножницы Бумага</p>
      </div>
      <div className="emoji-layer">
        <button onClick={() => mainGame("камень")} className="play-button">
          <img src={rock} className="img" alt="камень" />
        </button>

        <button onClick={() => mainGame("бумагу")} className="play-button">
          <img src={paper} className="img" alt="бумагу" />
        </button>

        <button onClick={() => mainGame("ножницы")} className="play-button">
          <img src={scissors} className="img" alt="ножницы" />
        </button>
      </div>

      <div className="result-root">
        <p className="js-result result">{result}</p>

        <p className="js-dis dis">
          <div className="comper-chois">
            Компьютер
            <img
              src={computerMove}
              className="chois-img"
              alt="Компьютерный выбор"
            />
          </div>
          <div className="my-coise">
            <img src={myMove} className="chois-img" alt="Ваш выбор" />
            Мой выбор
          </div>
        </p>

        <p className="js-score"></p>
      </div>

      <div className="button-root">
        <button
          onClick={() => {
            setSourse({ win: 0, lose: 0, draw: 0 });
            localStorage.removeItem("score");
          }}
          className="reset-button"
        >
          Сброс результата
        </button>
      </div>
    </div>
  );
}

export default GameRPC;
