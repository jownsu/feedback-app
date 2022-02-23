import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedBackItem from './FeedBackItem'
import { motion, AnimatePresence } from 'framer-motion'
function FeedBackList() {
    const { feedback } = useContext(FeedbackContext)

    return (
        <>
            {!feedback || feedback.length == 0 ? (
                <p>No Feedback</p>
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
            )}
        </>
    )
}

export default FeedBackList
