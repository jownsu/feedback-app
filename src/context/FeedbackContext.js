import { createContext, useState } from 'react'
import FeedBackData from '../data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedBackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback')) {
            setFeedback((prevFeedback) =>
                prevFeedback.filter((item) => item.id != id)
            )
        }
    }

    const updateFeedback = (updItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id == feedbackEdit.item.id ? { ...item, ...updItem } : item
            )
        )
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }
    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                addFeedback,
                deleteFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
