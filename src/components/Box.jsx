import React from 'react'
import Cell from './Cell'
import '../styles/Box.css'

const Box = (props) => {
  const arrNumbers = props.arrNumbers

  const handleSelected = ()=>{
    console.log('onclick ')
  }

  return (
    <div className='main-box'>
      {
        arrNumbers.map(element => (
          <Cell 
            key={`cell_${element}`}
            number={element}
            onClick={handleSelected} 
          />
        ))
      }
    </div>
  )
}

export default Box