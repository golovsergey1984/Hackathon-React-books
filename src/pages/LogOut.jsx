import React, { Component } from 'react'
import style from '../styles/LogOut.module.css'
import { Link } from 'react-router-dom'

class LogOut extends Component {
  componentDidMount () {
    window.addEventListener('keydown', this.onCnacelPress)
  }

  onCancelClick = event => {
    if (event.target.id !== 'cancel' && event.target !== event.currentTarget)
      return

    console.log('Exit!!')
  }

  onCnacelPress = e => {
    if (e.key !== 'Escape') return

    console.log('Exit key!!!')
  }

  onLogout = () => {
    console.log('Log out and go main page')
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.onCnacelPress)
  }

  render () {
    return (
      <div
        className={style.logOut_wrapper}
        onClick={event => this.onCancelClick(event)}
      >
        <div className={style.logOut_box}>
          <p className={style.logOut_box_descr}>
            Якщо Ви вийдете з програми незбережені дані будуть втрачені
          </p>
          <div className={style.logOut_box_dtns}>
            <button className={style.btn_cancel} id={'cancel'}>
              Відміна
            </button>

            {/* <Link to="/login">
              <button className={style.btn_logout} onClick={this.onLogout}>Вийти</button>
            </Link> */}
          </div>
        </div>
      </div>
    )
  }
}

export default LogOut
