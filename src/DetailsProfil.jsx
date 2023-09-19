import React from 'react';

const DetailsProfil = ({ username}) => {
  // Générer une URL aléatoire pour la photo de profil
  const randomAvatarUrl = `https://i.pravatar.cc/150?u=${username}`;

  return (
    <div className="details-profil">
      <div className="profil-image">
        <img src={randomAvatarUrl} alt="Profil" />
      </div>
      <div className="profil-info">
        <h2>{username}</h2>
        
      </div>
    </div>
  );
};

export default DetailsProfil;
