import React, { useState, useEffect } from 'react';
import DetailsSerie from './DetailsSerie';
import { Link } from 'react-router-dom';

const ListeSeriesFavorites = ({ favoriteSeries, sectionType }) => {
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
    }, [idString]); // Ajoutez idString comme dépendance à l'effet useEffect

    const [serieSelectionnee, setSerieSelectionnee] = useState(null);
    const gererClicSerie = (serie) => {
        setSerieSelectionnee(serie);
    };

    return (
        <div>
            <div className="liste-series">
                {seriesLiked && seriesLiked.length > 0 ? (
                    seriesLiked.map((serie) => (
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
                    ))
                ) : (
                    <p>Aucune série favorite disponible pour le moment.</p>
                )}
            </div>
        </div>
    );
};

export default ListeSeriesFavorites;
