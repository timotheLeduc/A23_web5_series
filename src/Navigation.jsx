import { Link } from 'react-router-dom';

function Navigation({ setUsername }) {
  const handleLogout = () => {
  
    setUsername("Guest");
  };

  return (
    <nav className="navigation">
      <ul className="navigation-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/series-trending">Trending</Link>
        </li>
        <li>
          <Link to="/series-favorites">Favorites</Link>
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

