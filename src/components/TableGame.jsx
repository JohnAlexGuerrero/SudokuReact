import React from 'react'
import '../styles/TableGame.css'
import Box from './Box'


const TableGame = ({game}) => {
  return (
    <div className='main-game'>
      {game.map(element =>(
        <Box key={element + 45} arrNumbers={element} />
      ))}
    </div>
  )
}

export default TableGame

// https://github.com/trananhtuat/javascript-sudoku/blob/main/README.md