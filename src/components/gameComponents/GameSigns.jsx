
import "./Styles.scss";

const GameSigns = () => {
  return (
    <div className="sign-wrapper">
      <img className="paper-img" src="icon-paper.svg" alt="paper" />
      <img className="rock-img" src="icon-rock.svg" alt="rock" />
      <img className="scissors-img" src="icon-scissors.svg" alt="scissors" />
    </div>
  );
};

export { GameSigns };
