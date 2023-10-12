import React from 'react';
import ListeSeries from './ListeSeries'; 
import { Outlet } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
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
  const idsArray = favoriteSeries.map(show => show.id);
  const idString = idsArray.map(id => `id[]=${id}`).join('&');

  const [seriesLiked, setSeriesLiked] = useState([]);
    useEffect(() => {
        const fetchSeriesLiked = async() => {
            const resp = await fetch(`http://localhost:3000/api/series/favorites?${idString}`);
            const data = await resp.json();
            setSeriesLiked(data.series);
        };

        fetchSeriesLiked();
    }, [idString]); 
  
  return (
    <div>
      <h2>Séries Favorites</h2>
      <ListeSeries
        seriesData={seriesData}
        seriesDetailsData={seriesDetailsData}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        favoriteSeries={favoriteSeries}
      
        sectionType={sectionType}
      />
      
      
      
    </div>
  );
};

export default Favorites;

