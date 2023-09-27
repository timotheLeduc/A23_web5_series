import React from 'react';

const UICard = ({ title, year, poster }) => {
  return (
    <div className="ui-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>Année : {year}</p>
    
    </div>
  );
};

export default UICard;
