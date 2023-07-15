import "./PopUpStyle.scss";
import { NavLink } from "react-router-dom";


const PopUp = () => {
  return (
    <>
      <div className="popupwrapper">
        <div className="popup">
          <p>Do Yo want to save this results?</p>
          <button>Yes</button> 
        <nav>
          <NavLink to="/">
            <button>No</button>
          </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export { PopUp };
