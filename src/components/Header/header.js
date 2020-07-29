import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { connect } from 'react-redux';
import { toggleShowLogOutModalAction } from '../../redux/modal/modalActions';
import LogOut from '../LogOutModal/LogOutModal';
import { IsAuthenticated, getUser } from '../../redux/session/sessionSelectors';
// import { getUser } from '../../redux/session/sessionSelectors';

const Header = ({ userName, isAuthenticated, openLogOutModal, isLogoutModalOpen }) => (
  <>
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <a href="/login" className={styles.siteLogo}>
          BR
        </a>
        {isAuthenticated && (
          <>
            <p className={styles.name}>
        <span className={styles.mStyle}>{userName.fullName[0].toUpperCase()}</span> {userName.fullName}
            </p>
            <ul className={styles.navigationList}>
              <li className={styles.navigationListItem}>
                <Link to="/library" className={styles.link}></Link>
              </li>
              <li className={styles.navigationListItem}>
                <Link to="/statistics" className={styles.link}>
                  {' '}
                </Link>
              </li>
              <li className={styles.navigationListItem}>
                <button
                  type="button"
                  className={styles.exitButton}
                  onClick={() => openLogOutModal()}
                >
                  <span className={styles.exitButtonTitle}>Вихід</span>
                </button>
                {/* <Link to="/logout" className={styles.exitButton}><span className={styles.exitButtonTitle}>Вихід</span> </Link> */}
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
    {isLogoutModalOpen && <LogOut />}
  </>
);

const mSTP = state => ({
  isLogoutModalOpen: state.modals.isShowLogOutModal,
  isAuthenticated: IsAuthenticated(state),
  userName: getUser(state).name,
});

const mDTP = dispatch => ({
  openLogOutModal: () => dispatch(toggleShowLogOutModalAction()),
  
});

export default connect(mSTP, mDTP)(Header);
