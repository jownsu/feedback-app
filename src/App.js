import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedbackData'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback')) {
      setFeedback((prevFeedback) =>
        prevFeedback.filter((item) => item.id != id)
      )
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedBackStats feedback={feedback} />
                <FeedBackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          />

          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
