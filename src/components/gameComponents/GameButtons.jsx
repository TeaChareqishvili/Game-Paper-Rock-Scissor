import { Paper } from "../gameComponents/Paper";
import { Rock } from "../gameComponents/Rock";
import { Scissors } from "../gameComponents/Scissors";
import { useState } from "react";
import "./Styles.scss";
import { CompChoise } from "./CompChoise";

const GameButtons = () => {
  const [choose, setChoose] = useState(true);
  const [chosenOption, setChosenOption] = useState(null);

  const handleChoice = (choice) => {
    setChosenOption(choice);
    setChoose(false);
  };

  return (
    <>
      {choose && (
        <div className="sign-wrapper">
          <button className="btn" onClick={() => handleChoice("paper")}>
            <Paper />
          </button>
          <button className="btn" onClick={() => handleChoice("rock")}>
            <Rock />
          </button>
          <button className="btn" onClick={() => handleChoice("scissors")}>
            <Scissors />
          </button>
        </div>
      )}
      {chosenOption && (
        <>
          {chosenOption === "paper" && (
            <div className="sign-wrapper">
              <Paper /> 
              <button>Play Again</button>
              <CompChoise />
              </div>
          )}
          {chosenOption === "rock" && (
            <div  className="sign-wrapper">
              <Rock /> 
              <button>Play Again</button>
              <CompChoise />
            </div>
          )}
          {chosenOption === "scissors" && (
            <div  className="sign-wrapper">
              <Scissors />
              <button>Play Again</button>
               <CompChoise />
            </div>
          )}
        </>
      )}
    </>
  );
};

export { GameButtons };
