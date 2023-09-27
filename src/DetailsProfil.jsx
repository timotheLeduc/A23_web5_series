import React from 'react';
import { FaHeart } from 'react-icons/fa';

import photo1 from "../src/photos/WIN_20221215_08_14_47_Pro.jpg"
import photo2 from "../src/photos/WIN_20221215_08_15_12_Pro.jpg"
import photo3 from "../src/photos/WIN_20221215_08_15_20_Pro.jpg"
import photo4 from "../src/photos/WIN_20230926_02_27_51_Pro.jpg"
import photo5 from "../src/photos/WIN_20230926_02_27_52_Pro.jpg"
const profilePics = [photo1, photo2, photo3, photo4, photo5];

const DetailsProfil = ({ username, favoriteSeries }) => {

  const randomIndex = Math.floor(Math.random() * profilePics.length);
  const selectedProfilePic = profilePics[randomIndex];
  return (
    <div className="details-profil">
      <div className="profil-image">
        <img src={selectedProfilePic} alt="Profil" />
      </div>
      <div className="profil-info">
        <h2>{username || 'Guest'}</h2>
      </div>
      <div>
        <FaHeart /> {favoriteSeries.length} Favoris
      </div>
    </div>
  );
};

export default DetailsProfil;
