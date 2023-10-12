import React from 'react';
import ListeSeries from './ListeSeries';
import { Outlet } from 'react-router-dom';
import { useState , useEffect } from 'react';

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

  const [series, setSeries] = useState([]);
    useEffect(() => {
      const fetchSeries = async() => {
        const resp = await fetch('http://localhost:3000/api/series/trending');
        const data = await resp.json();
        setSeries(data.series);
        console.log(data.series);
      };

      fetchSeries();
    }, []);


  return (
    <div>
      <h2>Séries Populaires</h2>
      <ListeSeries
        seriesData={series}
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
