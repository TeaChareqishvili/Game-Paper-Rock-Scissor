import { GameSigns } from "../gameComponents/GameSigns";
import "./MainStyles.scss";
import { useState } from "react";
import { Rules } from "../gameRules/Rules";

const Main = () => {
  const [rules, setRules] = useState(false);

  return (
    <div className="main">
      <div className="game-intro">
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div>
          <button>Start Game</button>
        </div>
      </div>
      <GameSigns />
      <div className="rules">
        <button onClick={() => setRules(true)}>Rules</button>
      </div>
      {rules && <Rules setRules={setRules}/>}
    </div>
  );
};

export { Main };
