import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/stringCords-logos_black_polices_gris.png';
import styles from '../Header/Hearder.module.css';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Vérifie la location actuelle et met à jour l'état d'authentification
    const isLoginPage = location.pathname === '/';
    const isSignUpPage = location.pathname === '/signup';
    setIsAuthenticated(!(isLoginPage || isSignUpPage));
  }, [location]);

  const handleLogout = () => {
    // Logique de déconnexion ici
    // ...

    // Rediriger vers la page d'accueil après la déconnexion
    // window.location.reload(); // Utilisez cette ligne si vous ne voulez pas utiliser react-router-dom
  };

  return (
    <div className={styles.Wrap}>
      <div className={styles.AjouCord}>
        {isAuthenticated && (
          <Link className={styles.SignLog} to="/Addstring">
            Ajouter une corde
          </Link>
        )}
        {isAuthenticated && <Link to="/Home">Aceuille</Link>}
      </div>
      <div className={styles.ConternerTitle}>
        <div className={styles.Logotitle}>
          <img className={styles.logo} src={logo} alt="logo" />
          <h1 className={styles.Title}>StringCords</h1>
        </div>
        <h2 className={styles.Slogan}>Noter vos cordes de guitare</h2>
      </div>
      <div className={styles.Navbar}>
        {!isAuthenticated && <Link className={styles.SignLog} to="/signup">Sign up</Link>}
        {!isAuthenticated && <Link to="/">Login</Link>}
        {isAuthenticated && (
          <Link to="/" onClick={handleLogout}>
            Déconnexion
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;


