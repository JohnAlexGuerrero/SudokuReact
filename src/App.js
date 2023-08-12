import { useEffect, useState } from "react";
import TableGame from "./components/TableGame";
// import Numbers from "./components/Numbers";

const sudokuQuizzes = '005910308,009403060,027500100,030000201,000820007,006007004,000080000,640150700,890000420' 

function App() {
  const [game, setGame] = useState([])

  useEffect(()=>{
    let idx = 0
    let sudokuPuzzle = []

    for (const numbersBox of sudokuQuizzes.split(',')) {
      let sudokuBox = {
        id: idx,
        numbers: Array.from(numbersBox)
      }      
      sudokuPuzzle.push(sudokuBox)
      idx += 1
    }

    setGame(sudokuPuzzle)
  },[])

  return (
    <div>
      <h1>Sudoku App</h1>
      <TableGame game={game} />
      {/* <hr/> */}
      {/* <Numbers numbers={[1,2,3,4,5]} /> */}
    </div>
  );
}

export default App;
