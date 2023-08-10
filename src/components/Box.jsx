import React from 'react'
import Cell from './Cell'
import '../styles/Box.css'

const Box = (props) => {
  return (
    <div className='main-box'>
      {props.arrNumbers.map(element => (
        <Cell key={element} number={element} />
      ))}
    </div>
  )
}

export default Box