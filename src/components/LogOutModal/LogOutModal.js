import React, { Component } from 'react';
import style from './LogOutModal.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleShowLogOutModalAction } from '../../redux/modal/modalActions';
import { logOutAction } from '../../redux/session/sessionActions';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

class LogOut extends Component {
  targetRef = React.createRef();
  targetElement = null;

  componentDidMount() {
    window.addEventListener('keydown', this.onCancelPress);
    this.targetElement = document.querySelector('#logOutModal');
    disableBodyScroll(this.targetElement);
  }

  onCancelClick = event => {
    if (event.target.id !== 'cancel' && event.target !== event.currentTarget)
      return;

    this.props.closeLogOutModal();
  };

  onCancelPress = e => {
    if (e.key !== 'Escape') return;

    this.props.closeLogOutModal();
  };

  onLogout = () => {
    this.props.closeLogOutModal();
    this.props.cleanSession();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCancelPress);
    enableBodyScroll(this.targetElement);
    clearAllBodyScrollLocks();
  }

  render() {
    return (
      <div
        className={style.logOut_wrapper}
        onClick={event => this.onCancelClick(event)}
        ref={this.targetRef}
        id="logOutModal"
      >
        <div className={style.logOut_box}>
          <p className={style.logOut_box_descr}>
            Якщо Ви вийдете з програми незбережені дані будуть втрачені
          </p>
          <div className={style.logOut_box_dtns}>
            <button className={style.btn_cancel} id={'cancel'}>
              Відміна
            </button>

            <Link to="/login">
              <button className={style.btn_logout} onClick={this.onLogout}>
                Вийти
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mDTP = dispatch => ({
  closeLogOutModal: () => dispatch(toggleShowLogOutModalAction()),
  cleanSession: () => dispatch(logOutAction()),
});

export default connect(null, mDTP)(LogOut);
