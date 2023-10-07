import React from 'react';
import ListeSeries from './ListeSeries'; 
import { Outlet } from 'react-router-dom';
import ListeSeriesFavorites from './ListeSeriesFavorites';

function Favorites({
  seriesData,
  seriesDetailsData,
  addToFavorites,
  removeFromFavorites,
  favoriteSeries,
  sectionType
  // isFavorite
}) {
  
  return (
    <div>
      <h2>Séries Favorites</h2>
      <ListeSeriesFavorites
        seriesData={seriesData}
        seriesDetailsData={seriesDetailsData}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        favoriteSeries={favoriteSeries}
      
        sectionType={sectionType}
      />
      
      
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Favorites;

