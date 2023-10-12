import React from 'react';
import { Navigate } from 'react-router-dom'; // Importer Navigate
import Navigation from './Navigation';
import DetailsProfil from './DetailsProfil';
import { Outlet } from 'react-router-dom';
import Recherche from './Recherche';

const Layout = ({ username, favoriteSeries }) => {
  // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
  // if (username === null) {
  //   return <Navigate to="/login" />;
  // }

  // Sinon, affichez le layout normal de l'application
  return (
    <div>
      <h2>Netflex</h2>
      <Navigation />
      <DetailsProfil username={username} favoriteSeries={favoriteSeries} />
      <Recherche sectionType={"recherche"}/>  
      <Outlet/>
      <footer>
        <h3>Info plus ou moins nécessaire</h3>
      </footer>
    </div>
  );
};

export default Layout;
