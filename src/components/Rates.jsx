import React, { useState, useEffect } from 'react';

function Rates() {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  useEffect(() => {
    // You can customize this to set conditions for when the rating prompt should appear automatically.
    // For this example, it will appear after 1 second.
    const timeout = setTimeout(() => {
      // You can also set a default rating if you want.
      // For now, let's set it to 0, and the user can choose their rating.
      setRating(0);
      setIsRated(false);
    }, 10);

    return () => clearTimeout(timeout); // Cleanup the timeout to avoid memory leaks
  }, []); // The empty dependency array ensures that this effect runs only once on component mount.

  const handleRating = (value) => {
    setRating(value);
    setIsRated(true);
    // Here, you can send the rating data to your server or perform any other necessary action.
  };

  return (
    <div>
      {isRated ? (
        <div>
          Thank you for rating! You gave {rating} stars.
        </div>
      ) : (
        <div>
          <p>Please rate our system:</p>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRating(value)}
                style={{
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: value <= rating ? 'gold' : 'gray',
                }}
              >
                &#9733; {/* Unicode star character */}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Rates;
