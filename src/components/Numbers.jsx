import React from 'react'
import '../styles/Cell.css'

const Numbers = (props) => {
  const numbers = [1,2,3,4,5,'x']

  return (
    <div>
      {numbers.map(num => <div key={num} className='main-grid-cell'>{num}</div>)}
    </div>
  )
}

export default Numbers
