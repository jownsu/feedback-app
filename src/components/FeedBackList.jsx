import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedBackItem from './FeedBackItem'
import { motion, AnimatePresence } from 'framer-motion'
import Spinner from './shared/Spinner'

function FeedBackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback</p>
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedBackItem key={item.id} item={item} />
                </motion.div>
            ))}
        </AnimatePresence>
    )
}

export default FeedBackList
