import { useEffect } from 'react'

function ResultsSection({ userPick, computerPick, playAgain, winState, getResults }) {
    useEffect(() => getResults(userPick, computerPick), [])

    return (
        <section className="section section--result">
            <div className='section--result__pick'>
                <p className='uppercase text-center fs-500'>You picked</p>
                <div className={`pick-btn section--result__pick-btn pick-btn--${userPick.name} pick-btn--result`}>
                    {userPick.icon}
                </div>
            </div>
            {winState.length > 0 &&
                <div className='section--result__result-text'>
                    <p className='text-center uppercase fs-900'>{winState}</p>
                    <button onClick={playAgain} className='btn btn--play-again'>Play again</button>
                </div>}
            <div className='section--result__pick'>
                <p className="uppercase text-center fs-500">The house picked</p>
                <div className={`pick-btn section--result__pick-btn pick-btn--${computerPick.name} pick-btn--result`}>
                    {computerPick.icon}
                </div>
            </div>
        </section>
    )
}

export default ResultsSection
