import { useState } from 'react'

function Header({ score }) {

    return (
        <div className="header">
            <h1 className='header__title uppercase'>Rock <br /> Paper <br /> Scissors</h1>
            <div className="header__score-box bg-white">
                <h2 className='header__score-text text-primary-400 uppercase'>Score</h2>
                <span className='header__score-num text-primary-300'>{score}</span>
            </div>
        </div>
    )
}

export default Header
