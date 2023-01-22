import { ReactComponent as RockIcon } from './assets/icon-rock.svg'
import { ReactComponent as PaperIcon } from './assets/icon-paper.svg'
import { ReactComponent as ScissorsIcon } from './assets/icon-scissors.svg'

export const rules = [
    [
        'rock',
        'scissors'
    ],
    [
        'paper',
        'rock'
    ],
    [
        'scissors',
        'paper'
    ]
]
export const picks = [
    {
        name: 'rock',
        icon: <RockIcon />
    },
    {
        name: 'paper',
        icon: <PaperIcon />
    },
    {
        name: 'scissors',
        icon: <ScissorsIcon />
    }
]