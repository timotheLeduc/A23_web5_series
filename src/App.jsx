import React, { useState } from 'react';
import DetailsSerie from './DetailsSerie';
import Etoiles from './Etoiles';
import Episodes from './Episodes';
import './App.css';
import ListeSeries from './ListeSeries';
import ListeSeriesFavorites from './ListeSeriesFavorites';

import seriesDetailsData from './series_etape2_details.json';
import seriesListData from './series_etape2_list.json';

import { FaHeart } from 'react-icons/fa';

import DetailsProfil from './DetailsProfil';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [favoriteSeries, setFavoriteSeries] = useState([]);

  const username = 'Timy';

  // Define the addToFavorites function
  const addToFavorites = (serie) => {
    setFavoriteSeries((prevFavorites) => {
      const newFavorites = [...prevFavorites, serie];
      console.log(newFavorites); // Log the updated favoriteSeries array
      return newFavorites;
    });
  };

  // Define the removeFromFavorites function
  const removeFromFavorites = (serie) => {
    setFavoriteSeries((prevFavorites) => {
      const newFavorites = prevFavorites.filter((favorite) => favorite.id !== serie.id);
      console.log(newFavorites); // Log the updated favoriteSeries array
      return newFavorites;
    });
  };

  return (
    <div className="App">
      <DetailsProfil
        username={username}
        favoriteSeries={favoriteSeries}
      />
      <ListeSeries
        seriesData={seriesListData}
        seriesDetailsData={seriesDetailsData}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites} // Pass removeFromFavorites function
      />
      
      <ListeSeriesFavorites
        favoriteSeries={favoriteSeries}
        seriesDetailsData={seriesDetailsData}
        removeFromFavorites={removeFromFavorites} // Pass removeFromFavorites function
      />
    </div>
  );
}



export default App;
