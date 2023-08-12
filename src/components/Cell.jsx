import React from 'react'
import '../styles/Cell.css'

const Cell = ({number, onClick}) => {
  const isZero = number === '0' ? true : false

  return (
    <div 
      className={`main-grid-cell ${isZero ? '': 'filled'}`}
      onClick={isZero ? onClick : null}
    >
      {isZero ? '': number}
    </div>
  )
}

export default Cell
