import "./GameStyle.scss";

const Game = ()=>{
    return (
       <div className="game-wrapper">
         <div className="score-wrapper">
           <div>
            <p>You</p>
            <h3>0</h3>
           </div>
           <div>
            <p>Computer</p>
            <h3>0</h3>
           </div>
         </div>

       </div>
    )
}

export {Game}