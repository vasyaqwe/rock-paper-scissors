import { useState } from 'react'

function ChoosingSection({ handlePick }) {

    return (
        <section className="section section--choosing">
            <button data-pick="paper" className='pick-btn' onClick={handlePick}>Paper</button>
            <button data-pick="scissors" className='pick-btn' onClick={handlePick}>Scissors</button>
            <button data-pick="rock" className='pick-btn' onClick={handlePick}>Rock</button>
        </section>
    )
}

export default ChoosingSection
