import "./GameStyle.scss";
import { GameButtons } from "../gameComponents/GameButtons";
import { useState } from "react";
import { Main } from "../main/Main";

const Game = ({ setGame }) => {
  const [back, setBack] = useState(false);
  const [user, setUser] = useState(0);
  const [comp, setComp] = useState(0);

  return (
    <div className="game-wrapper">
      <div className="back">
        <button className="back-btn" onClick={() => setBack(true)}>Back</button>
        {back && <Main /> && setGame(false)}
      </div>
      <div className="score-wrapper">
        <div className="score">
          <p>You</p>
          <h3>{user}</h3>
        </div>
        <div className="score">
          <p>Computer</p>
          <h3>{comp}</h3>
        </div>
      </div>
      <div>
        <GameButtons
          user={user}
          comp={comp}
          setUser={setUser}
          setComp={setComp}
          setGame={setGame}
        />
      </div>
    </div>
  );
};

export { Game };
