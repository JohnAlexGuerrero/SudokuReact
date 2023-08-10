import { useEffect, useState } from "react";
import TableGame from "./components/TableGame";

function App() {
  const [game, setGame] = useState([])

  useEffect(()=>{
    setGame([[1,2,0,0,5,3,9,8,7],[0,0,3,2,4,5,6,1,0],[3,0,0,5,4,0,2,6,0],
      [1,2,0,0,5,3,9,8,7],[0,0,3,2,4,5,6,1,0],[3,0,0,5,4,0,2,6,0],
      [1,2,0,0,5,3,9,8,7],[0,0,3,2,4,5,6,1,0],[3,0,0,5,4,0,2,6,0]
    ])
    // console.log(game)
  },[])

  return (
    <div>
      <h1>Sudoku App</h1>
      <TableGame game={game} />
    </div>
  );
}

export default App;
