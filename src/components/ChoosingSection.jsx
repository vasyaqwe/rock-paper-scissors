import { picks } from '../utils'
import { AnimatePresence, motion } from "framer-motion"

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
        <AnimatePresence mode='popLayout'>
            <motion.section initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="section section--choosing">
                {pickBtns}
            </motion.section>
        </AnimatePresence>
    )
}

export default ChoosingSection
