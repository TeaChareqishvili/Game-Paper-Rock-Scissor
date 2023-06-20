import "./Styles.scss";
 import { useEffect, useRef } from "react";



const Rules = ({setRules})=>{

 const imgRef = useRef(null)
 useEffect(() => {
    const handleClick = (e) => {
      if (imgRef.current) {
        if (imgRef.current.contains(e.target)) {
          setRules(false);
        }
      }
    };
  
    document.addEventListener("click", handleClick);
  
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  

    return (
         <div className="rules-wrapper">
            <div className="rules-img">
                <div className="close">
                    <p>Rules</p>
                    <img ref={imgRef} src="icon-close.svg" alt="close-icon"/>
                </div>
                <img src="image-rules.svg" alt="rules"/>
            </div>
         </div>
    )
    }

    export {Rules};