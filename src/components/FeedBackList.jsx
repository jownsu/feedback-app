import React from 'react'
import FeedBackItem from './FeedBackItem'

function FeedBackList({ feedback, handleDelete }) {
  return (
    <>
      {!feedback || feedback.length == 0 ? (
        <p>No Feedback</p>
      ) : (
        feedback.map((item) => (
          <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))
      )}
    </>
  )
}

export default FeedBackList
