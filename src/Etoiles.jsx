import React, { useState } from 'react';

const Etoiles = ({ evaluation, clickable }) => {
  const [userRating, setUserRating] = useState(0);

  const numberOfStars = evaluation / 2;

  const etoiles = [];

  for (let i = 1; i <= 5; i++) {
    const starClass = i <= numberOfStars ? "etoile-remplie" : "etoile";

    if (clickable) {
      etoiles.push(
        <span
          key={i}
          className={i <= userRating ? "etoile-remplie" : "etoile"}
          onClick={() => setUserRating(i)}
        >
          &#9733;
        </span>
      );
    } else {
      etoiles.push(
        <span
          key={i}
          className={starClass}
        >
          &#9733;
        </span>
      );
    }
  }

  return (
    <div>
      <span className="notation-etoiles">
        {etoiles}
      </span>
      {clickable ? <p>Votre évaluation : {userRating} étoiles</p> : null}
    </div>
  );
};

export default Etoiles;
