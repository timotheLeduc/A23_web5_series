import React, { useState, useEffect } from 'react';


const Etoiles = ({ evaluation }) => {
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    setUserRating(evaluation / 2); // Remplit les étoiles basées sur le rating initial
  }, [evaluation]);

  const etoilesRemplies = [];
  const etoilesCliquables = [];

  for (let i = 1; i <= 5; i++) {
    const starClassRemplies = i <= evaluation / 2 ? "etoile-remplie" : "etoile";
    const starClassCliquables = i <= userRating ? "etoile-remplie" : "etoile";

    etoilesRemplies.push(
      <span key={i} className={starClassRemplies}>
        &#9733;
      </span>
    );

    etoilesCliquables.push(
      <span
        key={i}
        className={starClassCliquables}
        onClick={() => setUserRating(i)}
      >
        &#9733;
      </span>
    );
  }

  return (
    <div>
      <div>
        <span className="notation-etoiles">{etoilesRemplies}</span>
        <p>Évaluation d'origine : {Math.floor(evaluation / 2)}</p>

      </div>
      <div>
        <span className="notation-etoiles">{etoilesCliquables}</span>
        <p>Votre évaluation : {Math.floor(userRating)}</p>
      </div>
    </div>
  );
};

export default Etoiles;
