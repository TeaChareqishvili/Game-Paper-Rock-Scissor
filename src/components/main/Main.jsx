import { GameSigns } from "../gameComponents/GameSigns";
import "./MainStyles.scss";
import { useState } from "react";
import { Rules } from "../gameRules/Rules";
import { Game } from "../game/Game";

const Main = () => {
  const [rules, setRules] = useState(false);
  const [game, setGame] = useState(false);

  return (
    <div className="main">
      <div className="game-intro">
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div className="buttons">
          <button className="players" onClick={() =>setGame(true)}>One Player</button>
          <button className="players">Two Players</button>
        </div>
      </div>
      <GameSigns />
      <div className="rules">
        <button className="players" onClick={() => setRules(true)}>Rules</button>
      </div>
      {rules && <Rules setRules={setRules} />}
      {game && <Game setGame={setGame}/>}
    </div>
  );
};

export { Main };
