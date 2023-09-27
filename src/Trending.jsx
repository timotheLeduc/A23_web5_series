import React from 'react';
import ListeSeries from './ListeSeries';
import { Outlet } from 'react-router-dom';

function Trending({
  seriesData,
  seriesDetailsData,
  addToFavorites,
  removeFromFavorites,
  favoriteSeries,
  // isFavorite,
  sectionType
}) {
  console.log(favoriteSeries + "hih");
 
  console.log('seriesData:', seriesData);
  console.log('seriesDetailsData:', seriesDetailsData);

  return (
    <div>
      <h2>Trending TV Series</h2>
      <ListeSeries
        seriesData={seriesData}
        seriesDetailsData={seriesDetailsData}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        favoriteSeries={favoriteSeries}
        // isFavorite={isFavorite}
        sectionType={sectionType}
      />
      <div>
        <Outlet/>
      </div>
    </div>
    
  );
}

export default Trending;
