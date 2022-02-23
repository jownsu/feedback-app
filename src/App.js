import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'

import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedbackData'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)

    return (
        <FeedbackProvider>
            <Router>
                <Header />

                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedBackForm />
                                    <FeedBackStats />
                                    <FeedBackList />
                                    <AboutIconLink />
                                </>
                            }
                        />

                        <Route exact path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App
