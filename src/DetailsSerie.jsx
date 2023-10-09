import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Etoiles from './Etoiles';
import Episodes from './Episodes';

import { useStorage } from "./hooks/useStorage";

const DetailsSerie = ({ seriesData, addToFavorites, removeFromFavorites, favoriteSeries }) => {
// Je voulais passer favorites series et regarder si id est dans le array mais il est undefined meme si il l<est pas dans les autres composantes
  const { id } = useParams();
  console.log(id);
  console.log(favoriteSeries)
  const seriesDetails = seriesData[id];
  console.log(seriesDetails);
  
  const favoriteSeriesMatch = favoriteSeries.some(favoriteSerie => favoriteSerie.id === parseInt(id, 10));
  console.log(favoriteSeriesMatch);
  if (!seriesDetails) {
    return <div>Series not found</div>;
  }
  const idsArray = favoriteSeries.map(show => show.id);
  console.log(idsArray);

  // const [estFavori, setEstFavori] = useState(false);
  const estFavori = !!favoriteSeriesMatch;
  console.log(estFavori);
  // const basculerFavori = () => {
    

  //   if (estFavori) {
      
  //     removeFromFavorites(seriesDetails);
  //   } else {
      
  //     addToFavorites(seriesDetails);
  //   }
  // };
  const {saveToStorage, getFromStorage, removeFromStorage} = useStorage("posts-");
  
  const basculerFavori = () => {
    let newFavoriteSeries;
  
    if (estFavori) {
      // Si la série est déjà un favori, la retirer des favoris
      newFavoriteSeries = favoriteSeries.filter((favorite) => favorite.id !== parseInt(id, 10));
      removeFromStorage("likes", parseInt(id, 10));
      removeFromFavorites(seriesDetails);
    } else {
      // Sinon, l'ajouter aux favoris
      newFavoriteSeries = [...favoriteSeries, seriesDetails];
      saveToStorage("likes", newFavoriteSeries);
      addToFavorites(seriesDetails);
    }
  
    // Mettez à jour le state local avec les nouveaux favoris
    // setFavoriteSeries(newFavoriteSeries);
  
    // Sauvegarder les favoris dans localStorage
    // saveToStorage("favoriteSeries", newFavoriteSeries);
  };
  

  const [serie, setSerie] = useState();
    useEffect(() => {
      const fetchSerie = async () => {
        const resp = await fetch(`http://localhost:3000/api/series/${id}`);
        const data = await resp.json();
        setSerie(data.serie);
        
      };

      fetchSerie();
    }, [id]);
    console.log(serie)

    if (!serie) {
      return <div>Loading...</div>;
    }
  return (
    <div>
      
      <h1>{serie.title}</h1>
      <div>
        <div>Année : {serie.year}</div>
        <div>Tagline : {serie.tagline}</div>
        <div>Vue d'ensemble : {serie.overview}</div>
        <div>Réseau : {serie.network}</div>
        <div>Pays : {serie.country}</div>
        <div>Statut : {obtenirEtatLabel(serie.status)}</div>
        <div>Évaluation : </div>
        <div>Langue : {serie.language}</div>
        <div>Genres : {serie.genres.join(', ')}</div>
        <div>Épisodes diffusés : {serie.aired_episodes}</div>

        <div>
          <h2>Bande-annonce</h2>
          <a href={serie.trailer} target="_blank" rel="noopener noreferrer">
            Voir la bande-annonce sur YouTube
          </a>
        </div>
        <Etoiles evaluation={serie.rating} clickable={true} />
        <div>
          <button onClick={basculerFavori}>
            {estFavori ? 'Enlever des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>
        {console.log(serie.seasons)}
        <Episodes listeEpisodes={serie.seasons}/>
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
