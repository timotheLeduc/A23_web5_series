import React from 'react';
import Navigation from './Navigation';
import DetailsProfil from './DetailsProfil';
import { Outlet } from 'react-router-dom';

const Layout = ({ username, favoriteSeries }) => {
  return (
    <div>
      <h2>Netflex</h2>
      <Navigation />
      <DetailsProfil username={username} favoriteSeries={favoriteSeries} />
      <Outlet/>
      <footer>
        <h2>Info plus ou moins necessaire</h2>
      </footer>
    </div>
  );
};

export default Layout;
