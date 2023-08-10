import React from 'react'
import '../styles/Cell.css'

const Cell = ({number}) => {
  console.log(number)
  return (
    <div className="main-grid-cell">
      {number}
    </div>
  )
}

export default Cell
