import React, { useState } from 'react';

const DetailsSerie = ({ seriesDetails, addToFavorites, removeFromFavorites }) => {
  const [estFavori, setEstFavori] = useState(false);

  const basculerFavori = () => {
    setEstFavori(!estFavori);

    if (estFavori) {
      // If it was already a favorite, remove it
      removeFromFavorites(seriesDetails);
    } else {
      // If it was not a favorite, add it
      addToFavorites(seriesDetails);
    }
  };

  return (
    <div>
      <h1>{seriesDetails.title}</h1>
      <div>
        <div>Année : {seriesDetails.year}</div>
        <div>Tagline : {seriesDetails.tagline}</div>
        <div>Vue d'ensemble : {seriesDetails.overview}</div>
        <div>Réseau : {seriesDetails.network}</div>
        <div>Pays : {seriesDetails.country}</div>
        <div>Statut : {obtenirEtatLabel(seriesDetails.status)}</div>
        <div>Évaluation : {/* Include your evaluation component here */}</div>
        <div>Langue : {seriesDetails.language}</div>
        <div>Genres : {seriesDetails.genres.join(', ')}</div>
        <div>Épisodes diffusés : {seriesDetails.aired_episodes}</div>
        <div>
          <button onClick={basculerFavori}>
            {estFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>
        <div>
          <h2>Bande-annonce</h2>
          <a href={seriesDetails.trailer} target="_blank" rel="noopener noreferrer">
            Voir la bande-annonce sur YouTube
          </a>
        </div>
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