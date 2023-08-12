import React from 'react'
import '../styles/TableGame.css'
import Box from './Box'


const TableGame = ({game}) => {
  return (
    <div className='main-game'>
      {game.map(element =>(
        <Box 
          key={`box-${element.id}`}
          id={`box-${element.id}`}
          arrNumbers={element.numbers}
        />
      ))}
    </div>
  )
}

export default TableGame

// https://github.com/trananhtuat/javascript-sudoku/blob/main/README.md