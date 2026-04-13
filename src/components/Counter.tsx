import { useCounter } from '../hooks/useCounter'
import { AnaSayfaSayac } from '../screens/AnaSayfaSayac'

export function Counter(): React.ReactElement {
  const { count, increment, decrement, reset } = useCounter(0)
  const dailyGoal = 100

  return (
    <AnaSayfaSayac
      count={count}
      dailyGoal={dailyGoal}
      onIncrease={increment}
      onDecrease={decrement}
      onReset={reset}
    />
  )
}
