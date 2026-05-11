/**
 * PROGRAM 14 — Star Rating
 *
 * Build a star rating component with 5 stars.
 *
 * Requirements:
 *   - Stars fill when hovered (preview) and stay filled when clicked (selected)
 *   - Display the current rating as text below (e.g. "Rating: 3 / 5")
 *   - A "Clear" button resets the rating to 0
 */

import { useState } from "react";


const MAX = 5;
const STAR_IDS = [1, 2, 3, 4, 5];

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  const display = hover > 0 ? hover : rating;
  
  return (
  <div style={{ 'padding': '16px' }}>
    <div
      role="group"
      aria-label="Star rating"
      onMouseLeave={() => setHover(0)}
      style={{'display': 'flex', 'gap': '4px', 'alignItems' : 'center'}}>
      {
        STAR_IDS.map((n) => {
          const filled = n <= display;
          return (
          <button
            key={n}
            type="button"
            aria-label={`Rate ${n} out of ${MAX} stars`}
            aria-pressed={rating === n}
            onMouseEnter={() => setHover(n)}
            onClick={() => setRating(n)}
            style={{
              'border' : 'none',
              'fontSize': '24px',
              'lineHeight': '1px',
              'cursor': 'pointer',
              'background': 'transparent',
              'padding' : '4px',
              'color': filled ? '#f5b301' : '#ccc'
            }}
          >
            ★
          </button>)
        })
      }
      
    
    </div>
    
    <p style={{ 'marginTop' : '24px' }}>
      Rating: {rating} / {MAX}
    </p>  
      
      <button
        type="button"
        disabled={rating === 0}
        style={{ 'marginTop' : '8px' }}
        onClick={() => {
          setRating(0);
          setHover(0)
        }}
      >
      Clear
      </button>
      
  </div>);
}
