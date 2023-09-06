import { Paper } from "../gameComponents/Paper";
import { Rock } from "../gameComponents/Rock";
import { Scissors } from "../gameComponents/Scissors";
import { useEffect, useState,useCallback } from "react";
import "./Styles.scss";
import { PopUp } from "../popUp/PopUp";


const GameButtons = ({ comp,user,setComp, setUser, setGame }) => {
  const [choose, setChoose] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);
  const [compChoice, setcompChoice] = useState(null);
  const [newGame, setNewGame] = useState(false)

  

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
    setUser(prevComp => {
      const updatedComp = prevComp + 1;
      if (updatedComp === 3) {
        console.log('user wins');
        setNewGame(true)
      }
      return updatedComp;
    });
   
  }, [setUser]);
  
  const Comp = useCallback(() => {
    setComp(prevComp => {
      const updatedComp = prevComp + 1;
      if (updatedComp === 3) {
        console.log('comp wins');
       setNewGame(true)
      }
      return updatedComp;
    });
  }, [setComp]);
  
  

  useEffect(() => {
    if (choose) {
      if (
        (chosenOption === "rock" && compChoice === 2) ||
        (chosenOption === "scissors" && compChoice === 1) ||
        (chosenOption === "paper" && compChoice === 0)
      ) {
          User()
       
      } else if (
        (chosenOption === "scissors" && compChoice === 0) ||
        (chosenOption === "paper" && compChoice === 2) ||
        (chosenOption === "rock" && compChoice === 1)
      ) {
        Comp()
      
      } else {
      
   
      
      }
    }
  }, [choose, compChoice, chosenOption,Comp,User]);

  const finalResult = [comp, user]

  localStorage.setItem('finalResult', JSON.stringify(finalResult));
  const retrievedResult = JSON.parse(localStorage.getItem('finalResult'));

console.log("results", retrievedResult)

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
          {newGame ? <PopUp setNewGame={setNewGame} setGame={setGame}/> :  <div className="play-again">
            <button className="play-again-btn" onClick={() => handlePlayAgain()}>Play Again</button>
          </div>}
         
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
