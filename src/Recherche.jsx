import React, { useState, useEffect } from 'react';
import ListeSeries from './ListeSeries';
import DetailsSerie from './DetailsSerie';
import { Outlet } from 'react-router-dom';
const Recherche = ({ sectionType }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/series/search?q=${query}`);
        const data = await response.json();
        setSearchResults(data.series);
        console.log(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const handleSerieClick = (serie) => {
    setSelectedSerie(serie);
  };

  return (
    <div>
      <h3>Recherche de Séries</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher des séries..."
      />
      <button>Rechercher</button>

      {console.log(searchResults)}
      <ListeSeries seriesData={searchResults} sectionType={sectionType} onSerieClick={handleSerieClick} />

      
      <div>
        <Outlet/>
      </div>

    </div>
  );
};

export default Recherche;
