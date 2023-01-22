import { useEffect } from 'react'

function ResultsSection({ userPick, computerPick, playAgain, winState, getResults }) {
    useEffect(() => getResults(userPick, computerPick), [])

    return (
        <section className="section section--results">
            <div>
                <p className='uppercase'>You picked</p>
                <div className='pick-btn pick-btn--result'>
                    {userPick}
                </div>
            </div>
            {winState.length > 0 &&
                <div>
                    {winState}
                    <button onClick={playAgain} className='btn btn--play-again'>Play again</button>
                </div>}
            <div>
                <p className="uppercase">The house picked</p>
                <div className='pick-btn pick-btn--result'>
                    {computerPick}
                </div>
            </div>
        </section>
    )
}

export default ResultsSection
