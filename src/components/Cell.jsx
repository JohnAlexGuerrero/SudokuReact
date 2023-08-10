import React from 'react'
import '../styles/Cell.css'

const Cell = ({number}) => {
  return (
    <div className="main-grid-cell">
      {number === 0 ? '': number}
    </div>
  )
}

export default Cell
