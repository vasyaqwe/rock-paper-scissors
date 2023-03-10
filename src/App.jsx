import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import ChoosingSection from './components/ChoosingSection'
import Header from './components/Header'
import ResultsSection from './components/ResultsSection'
import { picks, rules } from './utils'
import { AnimatePresence } from "framer-motion"
import Modal from './components/Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
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
    setUserPick(picks.find(item => item.name === e.currentTarget.dataset.pick))
    setComputerPick(picks[Math.floor(Math.random() * picks.length)])
  }
  function playAgain() {
    setGameRunning(false)
    setUserPick('')
    setComputerPick('')
    setWinState('')
  }
  function getResults(userPick, computerPick) {
    const picksArr = rules.find(item => item.includes(userPick.name) && item.includes(computerPick.name))
    if (userPick.name === computerPick.name) {
      setWinState("It's a tie!")
    } else {
      if (picksArr.indexOf(userPick.name) < picksArr.indexOf(computerPick.name)) {
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
        <AnimatePresence>
          {modalOpen && <Modal key={"modal"} handleClose={() => setModalOpen(false)} />}
          {!gameRunning ?
            <ChoosingSection handlePick={handlePick}
            />
            :
            <ResultsSection playAgain={playAgain} getResults={getResults}
              userPick={userPick}
              computerPick={computerPick}
              winState={winState}
            />
          }
        </AnimatePresence>
      </main>
      <button onClick={() => setModalOpen(true)} className="btn btn--rules">
        Rules
      </button>
    </>
  )
}

export default App
