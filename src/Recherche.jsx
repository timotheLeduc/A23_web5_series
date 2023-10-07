import React, { useState, useEffect } from 'react';
import ListeSeries from './ListeSeries';
const Recherche = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/series/search?q=${query}`);
        const data = await response.json();
        setSearchResults(data.series); // Assuming the series data is in 'data.series' property
        console.log(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query !== '') {
      fetchData();
    } else {
      setSearchResults([]); // Clear the search results when the query is empty
    }
  }, [query]);

  return (
    <div>
      <h2>Recherche de Séries</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher des séries..."
      />
      <button onClick={useEffect}>Rechercher</button>

      {console.log(searchResults)}
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((serie) => (
            <li key={serie.id}>
              <h3>{serie.title}</h3>
              <img src={serie.poster} alt={serie.title} />

            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
      <ListeSeries seriesData={searchResults} />
    </div>
    
  );
};

export default Recherche;