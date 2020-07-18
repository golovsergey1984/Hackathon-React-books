import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './header.module.css';


const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
    <a href="/" className={styles.siteLogo}>BR</a>
    <p className={styles.name}><span className={styles.mStyle}>M</span> Martha Stewart</p>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          {/* <Link to="/" exact activeStyle={activeStyle} className={styles.Link} > */}
          <a href="/library"> </a>
          {/* </Link> */}
        </li>
        <li className={styles.navigationListItem}>
          {/* <Link to="/movies" activeStyle={activeStyle} className={styles.Link}> */}
          <a href="/statistics"> </a>
          {/* </Link> */}
        </li>
        <li className={styles.navigationListItem}>
          {/* <Link to="/movies" activeStyle={activeStyle} className={styles.Link}> */}
          {/* <a href="#"> exit </a> */}
          <button type='button' className={styles.exitButton}><span className={styles.exitButtonTitle}>Вихід</span></button>
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
