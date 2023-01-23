import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import modalImage from '../assets/image-rules.svg'
import { ReactComponent as CloseIcon } from '../assets/icon-close.svg'

function Modal({ handleClose }) {
    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y: "100vh",
            opacity: 0
        }
    }
    return (
        <Backdrop onClick={handleClose}>
            <motion.div className="modal" onClick={e => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <header className="modal__header">
                    <p className="uppercase fs-600 text-primary-300 fw-700">Rules</p>
                    <button className="modal__close-btn" onClick={handleClose}><CloseIcon /></button>
                </header>
                <img src={modalImage} className="modal__img" alt="rules image" />
            </motion.div>
        </Backdrop>
    )
}

export default Modal
