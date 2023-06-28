import { Paper } from "../gameComponents/Paper";
import { Rock } from "../gameComponents/Rock";
import { Scissors } from "../gameComponents/Scissors";
import { useEffect, useState,useCallback } from "react";
import "./Styles.scss";

const GameButtons = ({ user, setComp, comp, setUser }) => {
  const [choose, setChoose] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);
  const [compChoice, setcompChoice] = useState(null);
  

  const optionComponents = {
    rock: <Rock />,
    paper: <Paper />,
    scissors: <Scissors />,
  };

  const handleChoice = (choice) => {
    setChosenOption(choice);
    setChoose(true);
    setcompChoice(
      Math.floor(Math.random() * Object.keys(optionComponents).length)
    );
  };

  const handlePlayAgain = () => {
    setChoose(false);
    setChosenOption(null);
    setcompChoice(null);
  };

  const User = useCallback(() => {
    setUser(prevUser => prevUser + 1);
  }, [setUser]);
  
  const Comp = useCallback(() => {
    setComp(prevUser => prevUser + 1);
  }, [setComp]);
  
  
  useEffect(() => {
    if (choose) {
      if (
        (chosenOption === "rock" && compChoice === 2) ||
        (chosenOption === "scissors" && compChoice === 1) ||
        (chosenOption === "paper" && compChoice === 0)
      ) {
          User()
        console.log("user wins +1 to user", compChoice);
      } else if (
        (chosenOption === "scissors" && compChoice === 0) ||
        (chosenOption === "paper" && compChoice === 2) ||
        (chosenOption === "rock" && compChoice === 1)
      ) {
        Comp()
        console.log("comp wins +1 to comp", compChoice);
      } else {
        console.log("draw", compChoice);
      }
    }
  }, [choose, compChoice, chosenOption,Comp,User]);



  return (
    <>
      {chosenOption ? (
        <>
          <div className="sign-wrapper">
            {chosenOption === "paper" ? (
              <Paper />
            ) : chosenOption === "rock" ? (
              <Rock />
            ) : (
              <Scissors />
            )}

            {compChoice === 1 ? (
              <Paper />
            ) : compChoice === 2 ? (
              <Scissors />
            ) : (
              <Rock />
            )}
          </div>
          <div className="play-again">
            <button onClick={() => handlePlayAgain()}>Play Again</button>
          </div>
        </>
      ) : (
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
    </>
  );
};

export { GameButtons };
