import { useState } from 'react'
import './index.css'
import { AnaSayfaSayac } from './screens/AnaSayfaSayac'

function App() {
  const [count, setCount] = useState(0)
  const dailyGoal = 100

  const handleIncrease = () => setCount((c) => c + 1)
  const handleDecrease = () => setCount((c) => Math.max(0, c - 1))
  const handleReset = () => setCount(0)

  return (
    <AnaSayfaSayac
      count={count}
      dailyGoal={dailyGoal}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      onReset={handleReset}
    />
  )
}

export default App
