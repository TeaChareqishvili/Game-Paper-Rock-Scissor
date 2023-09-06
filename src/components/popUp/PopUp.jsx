import "./PopUpStyle.scss";
import { NavLink } from "react-router-dom";

const PopUp = ({ setNewGame, setGame }) => {
  const handleNewGame = () => {
    setGame(false);
    setNewGame(false);
  };

  return (
    <>
      <div className="popupwrapper">
        <div className="popup">
          <p>Do You want to save this result?</p>
          <NavLink to="/gamehistory">
            <button className="pop-btn">Yes</button>
          </NavLink>

          <button className="pop-btn" onClick={() => handleNewGame()}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export { PopUp };
