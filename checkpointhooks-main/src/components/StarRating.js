import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (Rating: number) => {
    setRating(Rating)
    
  }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
    </div>
  )
}