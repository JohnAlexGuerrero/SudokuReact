import React from 'react'

const Numbers = (props) => {
  return (
    <div className='number-options'>
      {
        props.numbers.map(num =>(
            '2'
        ))
      }
    </div>
  )
}

export default Numbers
