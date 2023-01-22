import { useState } from 'react'
import { picks } from '../utils'

function ChoosingSection({ handlePick }) {
    const pickBtns = picks.map(item => (
        <button
            data-pick={item.name}
            className={`pick-btn pick-btn--${item.name}`}
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
