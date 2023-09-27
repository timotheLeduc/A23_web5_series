import React from 'react';
import ListeSeries from './ListeSeries'; 
import { Outlet } from 'react-router-dom';

function Favorites({
  seriesData,
  seriesDetailsData,
  addToFavorites,
  removeFromFavorites,
  favoriteSeries,
  // isFavorite
}) {
  
  return (
    <div>
      <h2>Séries Favorites</h2>
      <ListeSeries
        seriesData={seriesData}
        seriesDetailsData={seriesDetailsData}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        favoriteSeries={favoriteSeries}
      
        sectionType={"favorite"}
      />
      
      
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Favorites;

