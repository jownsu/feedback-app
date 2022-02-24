import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch('/feedbacks?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedbacks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete this feedback')) {
            await fetch(`/feedbacks/${id}`, { method: 'DELETE' })

            setFeedback((prevFeedback) =>
                prevFeedback.filter((item) => item.id !== id)
            )
        }
    }

    const updateFeedback = async (updItem) => {
        const response = await fetch(`/feedbacks/${feedbackEdit.item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json()
        setFeedback(
            feedback.map((item) =>
                item.id === feedbackEdit.item.id ? { ...item, ...data } : item
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
                isLoading,
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
