import "./App.css";
import { GameStatus } from "./comonents/GameStatus";
import { Board } from "./comonents/Board";

function App() {
  return (
    <div className="app-container">
      <GameStatus />
      <Board />
    </div>
  );
}

export default App;
