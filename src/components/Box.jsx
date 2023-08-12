import React, { useRef } from 'react'
import Cell from './Cell'
import '../styles/Box.css'

const Box = (props) => {
  var arrNumbers = props.arrNumbers
  const refBox = useRef(props.id)

  const handleSelected = (evt)=>{
    let cell = evt.target
    cell.classList.add('selected')

    let childrenBox = refBox.current.children
    for (const child of childrenBox) {
      child.classList.add('hover')
    }
  }

  return (
    <div className='main-box' ref={refBox} id={props.id}>
      {
        arrNumbers.map(element => (
          <Cell 
            key={`cell-${element}`}
            number={element}
            onClick={evt => handleSelected(evt)} 
          />
        ))
      }
    </div>
  )
}

export default Box