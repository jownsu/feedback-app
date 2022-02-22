import { useState } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedbackData'
import FeedBackStats from './components/FeedBackStats'

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback')) {
      setFeedback((prevFeedback) =>
        prevFeedback.filter((item) => item.id != id)
      )
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
