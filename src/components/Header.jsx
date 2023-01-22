import { useState } from 'react'

function Header({ score }) {

    return (
        <div className="header">
            <h1>ROCK <br /> PAPER <br /> SCISSORS</h1>
            <div className="header__score-box">
                <h2 className='uppercase'>Score</h2>
                {score}
            </div>
        </div>
    )
}

export default Header
