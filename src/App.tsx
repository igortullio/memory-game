import Board from '@/components/Board'
import Score from '@/components/Score'
import GameModal from './components/GameModal'
import DifficultySelector from './components/DifficultySelector'
import { useMemoryGame } from './hooks/use-memory-game'
import { formatTime } from './lib/formatTime'
import { useState } from 'react'
import { Difficulty } from './types'

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const { cards, moves, time, gameCompleted, handleCardClick, resetGame } = useMemoryGame(difficulty || 'easy')
  const formattedTime = formatTime(time)

  const handleRestart = () => {
    setDifficulty(null)
    resetGame()
  }

  if (!difficulty) return <DifficultySelector onSelect={setDifficulty} />

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-blue-200 p-4 sm:gap-8 sm:p-8">
      <Score moves={moves} time={formattedTime} onRestart={handleRestart} />
      <Board cards={cards} difficulty={difficulty} onCardClick={handleCardClick} />

      {gameCompleted && <GameModal moves={moves} time={formattedTime} onRestart={handleRestart} />}
    </main>
  )
}

export default App
