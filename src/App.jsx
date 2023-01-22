import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import ChoosingSection from './components/ChoosingSection'
import Header from './components/Header'
import ResultsSection from './components/ResultsSection'
import { picks, rules } from './utils'

function App() {
  const [winState, setWinState] = useState('')
  const [gameRunning, setGameRunning] = useState(false)
  const [userPick, setUserPick] = useState('')
  const [computerPick, setComputerPick] = useState('')
  const [score, setScore] = useState(() => JSON.parse(localStorage.getItem('score')) || 0)
  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score])

  function handlePick(e) {
    setGameRunning(true)
    setUserPick(e.target.dataset.pick)
    setComputerPick(picks[Math.floor(Math.random() * picks.length)])
  }
  function playAgain() {
    setGameRunning(false)
    setUserPick('')
    setComputerPick('')
    setWinState('')
  }
  function getResults(userPick, computerPick) {
    const picksArr = rules.find(item => item.includes(userPick) && item.includes(computerPick))
    if (userPick === computerPick) {
      setWinState("It's a tie!")
    } else {
      if (picksArr.indexOf(userPick) < picksArr.indexOf(computerPick)) {
        setWinState('You win!')
        setScore(prev => prev + 1)
      } else {
        setWinState('You lose!')
      }
    }
  }
  return (
    <>
      <Header score={score} />
      <main>
        {!gameRunning ?
          <ChoosingSection handlePick={handlePick} /> :
          <ResultsSection playAgain={playAgain} getResults={getResults}
            userPick={userPick}
            computerPick={computerPick}
            winState={winState}
          />
        }
      </main>
    </>

  )
}

export default App
