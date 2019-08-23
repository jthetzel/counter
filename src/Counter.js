import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import counterDuck from './redux/counterDuck'

function Counter () {
  const dispatch = useDispatch()
  const counterValue = useSelector(counterDuck.selectors.getCounter)

  function handleIncrement () {
    dispatch(counterDuck.actions.increment())
  }

  function handleDecrement () {
    dispatch(counterDuck.actions.decrement())
  }

  function handleDouble () {
    dispatch(counterDuck.actions.multiply(2))
  }

  return (
    <div>
      {counterValue}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleDouble}>double</button>
    </div>    
  )  
}

export default Counter
