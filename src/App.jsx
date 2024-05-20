import { useState, useCallback } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  const decrementCount = useCallback(() => {
    setCount((prevCount) => prevCount - 1)
  }, [])

  return (
    <div className='container'>
      <h1>React Counter with Vite</h1>
      <div className='buttons'>
        <button className='button increment' onClick={incrementCount}>
          Increment
        </button>
        <button className='button decrement' onClick={decrementCount}>
          Decrement
        </button>
      </div>
      <ShowCount count={count} />
    </div>
  )
}

export default App
