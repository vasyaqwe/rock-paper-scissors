import { useState } from 'react'
import { picks } from '../utils'

function ChoosingSection({ handlePick }) {
    const pickBtns = picks.map(item => (
        <button key={item.name}
            data-pick={item.name}
            className={`pick-btn section--choosing__pick-btn section--choosing__pick-btn--${item.name} pick-btn--${item.name}`}
            onClick={handlePick}>
            {item.icon}
        </button>
    ))

    return (
        <section className="section section--choosing">
            {pickBtns}
        </section>
    )
}

export default ChoosingSection
