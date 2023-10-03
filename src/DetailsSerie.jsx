import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Etoiles from './Etoiles';
import Episodes from './Episodes';
const DetailsSerie = ({ seriesData, addToFavorites, removeFromFavorites, favoriteSeries }) => {
// Je voulais passer favorites series et regarder si id est dans le array mais il est undefined meme si il l<est pas dans les autres composantes
  const { id } = useParams();
  console.log(id);
  console.log(favoriteSeries)
  const seriesDetails = seriesData[id];
  console.log(seriesDetails);
  
  const favoriteSeriesMatch = favoriteSeries.find(favoriteSerie => favoriteSerie.id === id);
  console.log(favoriteSeriesMatch);
  if (!seriesDetails) {
    return <div>Series not found</div>;
  }

  // const [estFavori, setEstFavori] = useState(false);
  const estFavori = !!favoriteSeriesMatch;
  console.log(estFavori);
  const basculerFavori = () => {
    

    if (estFavori) {
      
      removeFromFavorites(seriesDetails);
    } else {
      
      addToFavorites(seriesDetails);
    }
  };

  return (
    <div>
      {console.log(seriesData)}
      <h1>{seriesDetails.title}</h1>
      <div>
        <div>Année : {seriesDetails.year}</div>
        <div>Tagline : {seriesDetails.tagline}</div>
        <div>Vue d'ensemble : {seriesDetails.overview}</div>
        <div>Réseau : {seriesDetails.network}</div>
        <div>Pays : {seriesDetails.country}</div>
        <div>Statut : {obtenirEtatLabel(seriesDetails.status)}</div>
        <div>Évaluation : </div>
        <div>Langue : {seriesDetails.language}</div>
        <div>Genres : {seriesDetails.genres.join(', ')}</div>
        <div>Épisodes diffusés : {seriesDetails.aired_episodes}</div>

        <div>
          <h2>Bande-annonce</h2>
          <a href={seriesDetails.trailer} target="_blank" rel="noopener noreferrer">
            Voir la bande-annonce sur YouTube
          </a>
        </div>
        <Etoiles evaluation={seriesDetails.rating} clickable={true} />
        <div>
          <button onClick={basculerFavori}>
            {estFavori ? 'Enlever des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>
        {console.log(seriesDetails.seasons)}
        <Episodes listeEpisodes={seriesDetails.seasons}/>
      </div>
    </div>
  );
};

const obtenirEtatLabel = (statut) => {
  switch (statut) {
    case 'returning series':
      return 'Série qui revient';
    case 'continuing':
      return 'Série en cours';
    case 'in production':
      return 'En production';
    case 'planned':
      return 'Prévue';
    case 'upcoming':
      return 'À venir';
    case 'pilot':
      return 'Épisode pilote';
    case 'canceled':
      return 'Annulée';
    case 'ended':
      return 'Terminée';
    default:
      return statut;
  }
};

export default DetailsSerie;
