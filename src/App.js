import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const playerHand = document.querySelector(".playerHand");
  const computerHand = document.querySelector(".computerHand");
  const [userHandScr, setUserHandScr] = useState("");
  const [computerHandScr, setComputerHandScr] = useState("");
  const [message, setMessage] = useState("Click on 👊🏽✋🏽✌🏽 to start...");
  const [refresh, setRefresh] = useState("");

  // this is when the game start. we get handleClick value from selections button  (rock paper scissors) depending on user click
  const handleClick = (value) => {
    setMessage("");
    setRefresh("");
    setUserChoice(value);
    generateComputerChoice();
    setResult("");
    setComputerHandScr("./images/rock.png");
    setUserHandScr("./images/rock.png");
    playerHand.classList.add("scalable");
    computerHand.classList.add("scalable");
    playerHand.style.animation = "shakePlayerHand 2s ease";
    computerHand.style.animation = "shakeComputerHand 2s ease";
  };

  // generating the computer choice
  const generateComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * option.length);
    setComputerChoice(option[randomChoice]);
  };

  // Restarting the game
  const Restart = () => {
    setRefresh("");
    setResult("");
    setMessage("New Round");
    const Message = document.querySelector(".message");
    Message.style.bottom = "30%";
    Message.style.fontSize = "1.5rem";
    setComputerHandScr("./images/rock.png");
    setUserHandScr("./images/rock.png");
    setUserScore(0);
    setComputerScore(0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // compering user choice and computer choice to set the result and the score.
      const winner = document.querySelector(".winner");
      switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          setResult("YOU WIN 💪🏽 !     ");
          setRefresh(<i className="fa fa-refresh"></i>);
          setUserScore((previousScore) => previousScore + 1);
          winner.style.color = "hsl(177, 58%, 22%)";
          break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          setResult("YOU LOSE 😏 !     ");
          setRefresh(<i className="fa fa-refresh"></i>);
          setComputerScore((previousScore) => previousScore + 1);
          winner.style.color = "hsl(0, 47%, 32%)";
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          setResult("IT ' S A DRAW 👏🏽 !      ");
          setRefresh(<i className="fa fa-refresh"></i>);
          winner.style.color = "hsl(210, 18%, 30%)";
          break;
        default:
          setResult("");
          setRefresh("");
          setComputerScore(0);
          setUserScore(0);
      }
      // changing the scr property of hands img depending on the user and computer choice
      setComputerHandScr(`./images/${computerChoice}.png`);
      setUserHandScr(`./images/${userChoice}.png`);
    }, 2000);
    return () => clearTimeout(timer);
  }, [userChoice, computerChoice]);

  return (
    <div>
      <h1>Rock - Paper - Scissors - React Game</h1>
      <div className = "game">
        <div className="scores">
          <h2>You : {userScore}</h2>
          <h2>Computer : {computerScore}</h2>
        </div>
        <div className="hands">
          <img
            className="playerHand"
            src={userHandScr}
            alt=""
            title="Your Hand"
            onAnimationEnd={() => (playerHand.style.animation = "")}
          />
          <img
            className="computerHand"
            src={computerHandScr}
            alt=""
            title="Computer Hand"
            onAnimationEnd={() => (computerHand.style.animation = "")}
          />
        </div>
        <h2 className="message">{message}</h2>
        <h2 className="winner">
          {result}
          <span onClick={() => Restart()} title="Restart">
            {refresh}
          </span>
        </h2>
        <div className="selections">
          <button onClick={() => handleClick("rock")}>👊🏽</button>
          <button onClick={() => handleClick("paper")}>✋🏽</button>
          <button onClick={() => handleClick("scissors")}>✌🏽</button>
        </div>
      </div>
      <p class="githubIcon">
       Code on &nbsp;<a
        target="_blank"
        href="https://github.com/alimadhibujar/Rock-Paper-Scissors-React-Game"
        ><i class="fa fa-github" title="github"></i>
      </a>
    </p>
    </div>
  );
};

export default App;
