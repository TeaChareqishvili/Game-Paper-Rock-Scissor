import { Paper } from "../gameComponents/Paper";
import { Rock } from "../gameComponents/Rock";
import { Scissors } from "../gameComponents/Scissors";
import "./Styles.scss";

const GameSigns = () => {
  return (
    <div className="sign-wrapper">
      <Paper />
      <Rock />
      <Scissors />
    </div>
  );
};

export { GameSigns };
