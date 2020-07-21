import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';


const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
<<<<<<< HEAD
    <a href="/login" className={styles.siteLogo}>BR</a>
    <p className={styles.name}><span className={styles.mStyle}>M</span> Martha Stewart</p>
=======
      <a href="/" className={styles.siteLogo}>BR</a>
      <p className={styles.name}><span className={styles.mStyle}>M</span> Martha Stewart</p>
>>>>>>> dev
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <Link to="/library" className={styles.link}>
          </Link>

        </li>
        <li className={styles.navigationListItem}>
          <Link to="/statistics" className={styles.link}> </Link>

        </li>
        <li className={styles.navigationListItem}>
<<<<<<< HEAD
          <button type='button' className={styles.exitButton}><span className={styles.exitButtonTitle}>Вихід</span></button>
          {/* <Link to="/logout" className={styles.exitButton}><span className={styles.exitButtonTitle}>Вихід</span> </Link> */}
=======
          {/* <button type='button' className={styles.exitButton}><span className={styles.exitButtonTitle}>Вихід</span></button> */}
          <Link to="/login" className={styles.exitButton}><span className={styles.exitButtonTitle}>Вихід</span> </Link>
>>>>>>> dev
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
