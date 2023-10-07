import React, { useState, useEffect } from 'react';
import DetailsSerie from './DetailsSerie';
import { Link } from 'react-router-dom';

const ListeSeriesFavorites = ({ favoriteSeries, sectionType }) => {
    console.log(favoriteSeries)
    const idsArray = favoriteSeries.map(show => show.id);
    console.log(idsArray);
    const idString = idsArray.map(id => `id[]=${id}`).join('&');
    console.log(idString)

    const [seriesLiked, setSeriesLiked] = useState([]);
    useEffect(() => {
        const fetchSeriesLiked = async() => {
        const resp = await fetch(`http://localhost:3000/api/series/favorites?${idString}`);
        const data = await resp.json();
        setSeriesLiked(data.series);
        console.log(data.series);
      };

      fetchSeriesLiked();
    }, []);
    const [serieSelectionnee, setSerieSelectionnee] = useState(null);
    const gererClicSerie = (serie) => {
        setSerieSelectionnee(serie);
        console.log(serie);
    
      };
  
  
  return (
    <div>
      <div className="liste-series">
        {seriesLiked?.map((serie) => (
            <div key={serie.id}>
            <Link
                onClick={() => gererClicSerie(serie)}  
                to={`/${sectionType === 'trending' ? 'series-trending' : 'series-favorites'}/${serie.id}`}
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

export default ListeSeriesFavorites;

