import React, { useState, useEffect} from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import DetailsSerie from './DetailsSerie';
import { useNavigate } from 'react-router-dom';

const ListeSeries = ({
  seriesData,
  addToFavorites,
  removeFromFavorites,
  favoriteSeries,
  // isFavorite,
  sectionType, 
}) => {
  const [serieSelectionnee, setSerieSelectionnee] = useState(null);
  const navigate = useNavigate();

  const gererClicSerie = (serie) => {
    console.log(sectionType);
    setSerieSelectionnee(serie);
    console.log(serie);

  };
  // const [series, setSeries] = useState([]);
  //   useEffect(() => {
  //     const fetchSeries = async() => {
  //       const resp = await fetch('http://localhost:3000/api/series/trending');
  //       const data = await resp.json();
  //       setSeries(data.series);
  //       console.log(data.series);
  //     };

  //     fetchSeries();
  //   }, []);

  
  return (
    <div>
      <div className="liste-series">
        {seriesData.map((serie) => (
          <div key={serie.id}>
            <Link
              onClick={() => gererClicSerie(serie)}
              to={`/${sectionType === 'recherche' ? 'recherche' : sectionType === 'trending' ? 'series-trending' : 'series-favorites'}/${serie.id}`}
            >
                
              <div className={`carte-serie ${serieSelectionnee === serie ? 'selectionnee' : ''}`}>
                <img src={serie.poster} alt={serie.title} />
                <h3>{serie.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ListeSeries;
