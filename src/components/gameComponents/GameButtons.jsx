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
    setChoose(false)
  };

  return (
    <>
      {choose && (
        <div className="sign-wrapper">
          <button onClick={() => handleChoice("paper")}>
            <Paper />
          </button>
          <button onClick={() => handleChoice("rock")}>
            <Rock />
          </button>
          <button onClick={() => handleChoice("scissors")}>
            <Scissors />
          </button>
        </div>
      )}
      {chosenOption &&(
        <>
          {chosenOption === "paper" && <><Paper /> <CompChoise/></> }
          {chosenOption === "rock" && <Rock />}
          {chosenOption === "scissors" && <Scissors />}
        </>
      )}
    </>
  );
};

export { GameButtons };
