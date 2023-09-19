import React, { useState } from 'react';
import DetailsSerie from './DetailsSerie';

const ListeSeries = ({ seriesData, seriesDetailsData, addToFavorites, removeFromFavorites, favoriteSeries }) => {
  const [serieSelectionnee, setSerieSelectionnee] = useState(null);

  // Function to select a series by ID
  const gererClicSerie = (serie) => {
    setSerieSelectionnee(serie);
  };

  return (
    <div>
      <h2>Séries Télévisées Tendances</h2>
      <div className="liste-series">
        {seriesData.map((serie) => (
          <div key={serie.id}>
            <div
              className={`carte-serie ${serieSelectionnee === serie ? 'selectionnee' : ''}`}
              onClick={() => gererClicSerie(serie)}
            >
              <img src={serie.poster} alt={serie.title} />
              <h3>{serie.title}</h3>
            </div>
            {serieSelectionnee === serie && (
              <div className="details-serie-selectionnee">
                <DetailsSerie
                  seriesDetails={seriesDetailsData[serie.id]}
                  addToFavorites={addToFavorites} // Pass addToFavorites function
                  removeFromFavorites={removeFromFavorites} // Pass removeFromFavorites function
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeSeries;

