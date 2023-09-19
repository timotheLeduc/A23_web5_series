import React, { useState } from 'react';

const Episodes = ({ listeEpisodes }) => {
 const [episodesVisibles, setEpisodesVisibles] = useState(false);

 return (
   <div>
     <button onClick={() => setEpisodesVisibles(!episodesVisibles)}>
       {episodesVisibles ? 'Cacher les episodes' : 'Afficher les episodes'}
     </button>
     {episodesVisibles && (
       <div>
         <h2>Episodes par saison :</h2>
         <ul>
           {listeEpisodes.map((saison, index) => (
             <li key={index}>
               Saison {index + 1} : {saison.episodes.length} episodes
             </li>
           ))}
         </ul>
       </div>
     )}
   </div>
 );
};

export default Episodes;
