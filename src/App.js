import { Main } from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import { GameHistory } from "./components/history/GameHistory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gamehistory" element={<GameHistory />} />
      </Routes>
    </div>
  );
}

export default App;
