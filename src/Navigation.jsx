import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useStorage } from "./hooks/useStorage";

function Navigation({ setUsername }) {
  const {saveToStorage, getFromStorage, removeFromStorage} = useStorage("posts-");
  const [currentPath, setCurrentPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleLogout = () => {
    removeFromStorage("likes");
    removeFromStorage("username");
    setUsername("Guest");
  };

  return (
    <nav className="navigation">
      <ul className="navigation-links">
        <li>
          <Link to="/" className={currentPath === '/' ? 'active-link' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/series-trending" className={currentPath === '/series-trending' ? 'active-link' : ''}>
            Trending
          </Link>
        </li>
        <li>
          <Link to="/series-favorites" className={currentPath === '/series-favorites' ? 'active-link' : ''}>
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/recherche" className={currentPath === '/recherche' ? 'active-link' : ''}>
            Recherche
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
