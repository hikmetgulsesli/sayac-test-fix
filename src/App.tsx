import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { AnaSayfaSayac } from './screens/AnaSayfaSayac'
import { NotFound } from './pages/NotFound'
import { ErrorFallback } from './components/ErrorFallback'
import { ErrorBoundary } from './components/ErrorBoundary'

function CounterPage() {
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

function ErrorPage() {
  return (
    <main className="flex-grow flex items-center justify-center px-6 pt-16 pb-24">
      <ErrorFallback />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface text-on-surface flex flex-col">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<CounterPage />} />
            <Route path="/history" element={<ErrorPage />} />
            <Route path="/settings" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  )
}

export default App
