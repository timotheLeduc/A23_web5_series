// import React, { useState } from 'react';
// import DetailsSerie from './DetailsSerie';
// import { FaHeart } from 'react-icons/fa';
// const ListeSeriesFavorites = ({ favoriteSeries, seriesDetailsData }) => {
//   const [selectedSeriesId, setSelectedSeriesId] = useState(null);

//   // Function to select a series by ID
//   const selectSeriesById = (serieId) => {
//     setSelectedSeriesId(serieId);
//   };
  
  
//   return (
//     <div className="favoris">
//       <h2>Séries Favorites</h2>
//       <FaHeart /> {favoriteSeries.length} Favoris
//       <div className="liste-series">
//         {favoriteSeries.map((serie) => (
//           <div key={serie.id}>
//             <div className={`carte-serie`}>
//               <img src={serie.poster} alt={serie.title} />
//               <h3>{serie.title}</h3>
//               <button onClick={() => selectSeriesById(serie.id)}>Voir les détails</button>
//             </div>
//             {selectedSeriesId === serie.id && seriesDetailsData[serie.id] && (
//               <div className="details-serie-selectionnee">
//                 <DetailsSerie seriesDetails={seriesDetailsData[serie.id]} />
//               </div>
//             )}
            
//           </div>
//         ))}
//       </div>
      
//     </div>
    
//   );
// };

// export default ListeSeriesFavorites;

